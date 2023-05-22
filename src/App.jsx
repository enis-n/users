import React from "react"
import { User } from './components/User'
import { Text } from "@chakra-ui/react"


const App = () => {
  return (
    <div>
      <Text color='red' fontSize='3xl'>
        Enis Nishori
      </Text>
      <User
        emri='Enis'
        placeholder='sheno emrin e enisit ketu'
      />
      <User
        emri='Mentor'
        placeholder='sheno emrin e mentorit ketu'
      />
    </div>
  )
}

/* function App() {
  return <div>hello world!</div>
} */

export default App
