const dataCleaner = ({user})=>{
  const username = user.name
  const posts = user.publication.posts

  // find a way to use less maps
  const postnames = posts.map((item)=>(item.slug))
  const briefs = posts.map((item)=>(item.brief)) // this is markdown
  return {
    username, 
    postnames,
    briefs
  }
}

export default dataCleaner