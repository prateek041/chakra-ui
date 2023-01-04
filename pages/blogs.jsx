import Navbar from "../components/Navbar"
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client"
import dataCleaner from "../utils/blogs-page-cleaner";
// import getPostData from "../utils/data-cleaner"
// import path from "path"

const Blog = ({data})=>{
  return (
    <>
      <Navbar/>
      <h1>{data.user.blogHandle} this is the blog handle</h1>
      <h1>this is test</h1>
    </>
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

  // fetch slug, name and content markdown
console.log(dataCleaner(data))

  return {
    props: {
      data: data
    }
  }

  // TESTING STUFF
  // const targetpath = path.join(process.cwd(), 'test/markdown')
  // console.log(getPostData(data, targetpath))
}
export default Blog