import React, { useState } from "react"
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import "../global.css"
import Header from "../components/Header"
import { getDrinks, removeDrink } from "../lib/drinksCache"

const MyDrinks = () => {
  const [drinks, setDrinks] = useState(getDrinks)
  const onRemove = (id: string) => {
    removeDrink(id)
    const newDrinks = drinks.filter(drink => drink.idDrink !== id)
    setDrinks(newDrinks)
  }
  const hasDrinks = drinks.length > 0
  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        {hasDrinks &&
          drinks.map(drink => (
            <Card
              key={drink.idDrink}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 30,
              }}
            >
              <CardMedia
                image={drink.strDrinkThumb}
                style={{ height: 150, width: 150 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "70%",
                }}
              >
                <CardHeader title={drink.strDrink} />
                <div>
                  <IconButton onClick={() => onRemove(drink.idDrink)}>
                    <DeleteIcon style={{ fontSize: 30 }} />
                  </IconButton>
                </div>
              </div>
            </Card>
          ))}
        {!hasDrinks && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Typography style={{ color: "white" }}>
              No drinks. Please swipe some delicious drinks :)
            </Typography>
          </div>
        )}
      </Container>
    </>
  )
}

export default MyDrinks
