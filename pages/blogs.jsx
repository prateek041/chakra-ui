import Navbar from "../components/Navbar"
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client"
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";
import { Flex, Box, Text} from "@chakra-ui/react";
import BlogHeader from "../components/Blog-header"
import Link from "next/link"

const Blog = ({username, posts})=>{
  return (
    <Layout>
      <Navbar/>
      <Flex fontFamily="mono" direction="column">
        <Box mb={20}>
          <BlogHeader name={username} />
        </Box>
        <div>{posts.map((item)=>{
            return <BlogCard key={item.slug} posts={item}/>
          })}
        </div>
        <Link href="https://prateek-singh.hashnode.dev/" target="_blank">
          <Text fontSize="xl" fontWeight="bold">
            Read the blogs here 👈🏻
          </Text>
        </Link>
      </Flex>
    </Layout>
  )
}

export async function getStaticProps(){
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