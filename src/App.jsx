import React, { useState } from "react"
import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { UserTable } from "./components/Users"

const App = () => {
  // let variablaNje = 'Hello world!'
  // const [variablaNje, setVariablaNje] = useState(1)

  /*   const ndryshimi = () => {
      const numriRandom = Math.random()
      setVariablaNje(numriRandom)
    } */

  return (
    <Box >
      {/* <Button onClick={ndryshimi}>Ndrysho</Button> */}
      <Flex>

        {/* {variablaNje} */}

        <UserTable />
      </Flex>
    </Box>
  )
}

export default App
