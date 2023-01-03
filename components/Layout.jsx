import {Container} from "@chakra-ui/react"

const Layout = ({children})=>{
  return (
    <Container maxW="6xl" className="layout">
      {children}
    </Container>
  )
}

export default Layout