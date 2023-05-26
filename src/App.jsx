import React, { useEffect, useState } from "react"
import { Box, Button, Flex, Heading, Spinner, list } from "@chakra-ui/react"
import { UserTable } from "./components/UserTable"

const App = () => {
  // const [lista, setLista] = useState([{ id: 0, emri: 'placehoder', mbiemri: 'placeholder' }])
  const [userat, setUserat] = useState(null)

  const [fromaKomplete, setFormaKomplete] = useState({
    id: '',
    emri: '',
    mbiemri: '',
  })

  const funksioniShto = () => {
    setLista(prev => [
      ...prev,
      {
        id: fromaKomplete.id,
        emri: fromaKomplete.emri,
        mbiemri: fromaKomplete.mbiemri
      },
    ])
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setFormaKomplete(
      vleraParaprake => ({
        ...vleraParaprake,
        [name]: value,
      })
    )
  }

  useEffect(() => {
    const response = fetch('https://dummyjson.com/users')
    response
      .then(res => res.json())
      .then(rezultati => setUserat(rezultati))
  }, [])

  if (!userat) {
    return <Spinner />
  }

  return (
    <Box >
      <Flex>
        <UserTable
          handleChange={handleChange}
          fromaKomplete={fromaKomplete}
          lista={userat}
          funksioniShto={funksioniShto}
        />
      </Flex>
    </Box>
  )
}

export default App
