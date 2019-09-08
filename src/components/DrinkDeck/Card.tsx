import styled from "@emotion/styled"
import { animated } from "react-spring"

const Card = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Card
