import Navbar from "../components/Navbar"
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client"
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import { Flex, Box} from "@chakra-ui/react";
import BlogAvtar from "../components/Blog-header"

const Blog = ({username, posts})=>{
  return (
    <Layout>
      <Navbar/>
      <Flex fontFamily="mono" direction="column">
        <Box mb={20}>
          <BlogAvtar name={username} />
        </Box>
        <div>{posts.map((item)=>{
            return <BlogCard posts={item}/>
          })}
        </div>
      </Flex>
    </Layout>
  )
}

export async function getServerSideProps(){
  const {data} = await client.query({
    query: gql`
    query {
      user(username: "prateek421"){
        name
        publication{
          posts{
            slug
            brief
          }
        }
      }
    }
    `
  })

  // filtering data
  const user = data.user
  const username = user.name
  const posts = user.publication.posts

  return {
    props: {
      username: username,
      posts: posts,
    }
  }

  // TESTING STUFF
  // const targetpath = path.join(process.cwd(), 'test/markdown')
  // console.log(getPostData(data, targetpath))
}
export default Blog