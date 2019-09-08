import React from "react"
import { graphql } from "gatsby"
import { sampleSize } from "lodash"

import DrinkCard from "../components/DrinkCard"
import Layout from "../components/layout"
import "../global.css"

const IndexPage = ({
  data: {
    allDrink: { nodes: drinks },
  },
}) => {
  const randomDrinks = sampleSize(drinks, 20)
  console.log("Turbo output: randomDrinks", randomDrinks)
  return (
    <Layout>
      <DrinkCard drinks={randomDrinks} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query CocktailQuery {
    allDrink {
      nodes {
        idDrink
        strDrink
        strDrinkThumb
      }
    }
  }
`

export default IndexPage
