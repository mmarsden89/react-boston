// @flow
import React from "react"
import { Box } from "./layout-components"

const Card = ({ children }: React.Node) => (
  <Box
    bg="primary"
    borderRadius="5px"
    color="white"
    height="120px"
    alignItems="center"
    justifyContent="center"
    display="flex"
    fontSize="9"
    padding="8px"
    boxShadow="0 3px 6px rgba(34, 25, 36, .2)"
  >
    {children}
  </Box>
)

export default Card
