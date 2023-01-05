// this is for creating blog cards
import {Text, Flex, Box} from '@chakra-ui/react'

// posts is recieving individual posts
const BlogCard = ({posts})=>{
  return (
    <Flex flexDirection="column" mb="10">
      <Text fontSize="3xl" fontWeight="bold" mb={2}>{posts.slug}</Text>
      <Text>{posts.brief}</Text>
    </Flex>
  )
}

export default BlogCard