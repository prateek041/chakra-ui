// this is the home page
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import {Profile} from "../components/Profile"
import {Flex, Container} from "@chakra-ui/react"

export default function Home() {
  return (
    <>
    <Layout> 
      {/* <Navbar /> */}
      <Flex h="100vh" className="index-flex-container" justify="center">
        <Profile />
      </Flex>
    </Layout>
    </>
  )
}
