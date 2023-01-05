// this is for creating blog cards
import Text from '@chakra-ui/react'

// posts is recieving individual posts
const BlogCard = ({posts})=>{
  return (
    <h1>{posts.slug}</h1>
  )
}

export default BlogCard