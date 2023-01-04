// WE DON'T NEED IT RIGHT NOW

// const dataCleaner = ({user})=>{
//   const username = user.name
//   const posts = user.publication.posts

//   // find a way to use less maps
//   const postnames = posts.map((item)=>(item.slug))
//   const briefs = posts.map((item)=>(item.brief))
//   return {
//     username, 
//     postnames,
//     briefs
//   }
// }

// function markdownRenderer(data){
//   const renderer = new marked.Renderer();

//   renderer.text = function(text) {
//     return text;
//   };

//   const finaltext = marked(data, {renderer: renderer});
//   console.log(finaltext)
// }

// export default dataCleaner