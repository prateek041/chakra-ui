import {useRouter} from 'next/router'
import { Flex, Text} from "@chakra-ui/react"

const Navbar = ()=>{

  const router = useRouter() // creating a new router.

  return (
    <Flex align="center" justify="center" fontFamily="mono" fontWeight={"bold"} mb={["20"]}>
      {/* repeated code here */}
      <Text  p={["4"]} onClick={()=>router.push('/')} _hover={{"cursor":"pointer"}}>Home</Text>
      <Text  p={["4"]}  onClick={()=>router.push('/blogs')} _hover={{"cursor": "pointer"}}>Blogs</Text>
    </Flex>
  )
}

export default Navbar