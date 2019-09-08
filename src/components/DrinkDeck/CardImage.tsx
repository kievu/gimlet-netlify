import styled from "@emotion/styled"
import { animated } from "react-spring"

const CardImage = styled(animated.div)`
  background-color: white;
  background-size: auto 70%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 70vh;
  max-height: 570px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`

export default CardImage
