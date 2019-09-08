import React, { useState } from "react"
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import Layout from "../components/layout"
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
  return (
    <>
      <Header />
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "black", height: "100vh", overFlow: "auto" }}
      >
        {drinks.map(drink => (
          <Card
            key={drink.idDrink}
            style={{ display: "flex", flexDirection: "row", marginBottom: 30 }}
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
      </Container>
    </>
  )
}

export default MyDrinks
