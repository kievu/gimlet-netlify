import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      colorPrimary: {
        backgroundColor: "black",
      },
    },
  },
})

export { theme }
