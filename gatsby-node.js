const fetch = require("node-fetch")
const path = require(`path`)
const crypto = require("crypto")

const COCKTAIL_URL = "https://the-cocktail-db.p.rapidapi.com/filter.php"
const RAPID_KEY = "779a08030emsh1193045f61367d3p18df3ajsnaeaf82fef197"

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const response = await fetch(`${COCKTAIL_URL}?a=Alcoholic`, {
    headers: { "X-RapidAPI-Key": RAPID_KEY },
  })
  // Process response into nodes.
  const { drinks } = await response.json()
  drinks.forEach(drink =>
    createNode({
      ...drink,
      id: drink.idDrink,
      children: [],
      internal: {
        type: "Drink",
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(drink.strDrink))
          .digest(`hex`),
      },
    })
  )

  return
}
