import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./src/getPageContext"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
