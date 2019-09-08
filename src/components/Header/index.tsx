import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Bar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`
const Header = () => (
  <AppBar position="static">
    <Bar>
      <Button component={Link} to="/" color="inherit">
        <Typography variant="h6">Gimlet</Typography>
      </Button>
      <Button component={Link} to="/my-drinks" color="inherit">
        My drinks
      </Button>
    </Bar>
  </AppBar>
)

export default Header
