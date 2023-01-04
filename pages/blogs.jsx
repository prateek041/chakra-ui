import Navbar from "../components/Navbar"
import { gql } from "@apollo/client";
import client from "../apollo/apollo-client"
import Text from "@chakra-ui/react"

const Blog = ({username, posts})=>{
  return (
    <>
      <Navbar/>
      <div>{username}</div>
      <div>{posts.map((item)=>{
        return (<>
            <h1>{item.slug}</h1>
            <p>{item.brief}</p>
          </>
        )
      })}</div>
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

  // filtering data
  const user = data.user // this is the user.
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