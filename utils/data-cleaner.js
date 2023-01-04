import fs, {mkdirSync} from "fs"
import path from "path"

// for creating folders
function createFolders (targetpath){
  mkdirSync(targetpath, {recursive:true})
}

const getPostData = ({user}, targetpath)=>{
  const userName = user.name; // my username
  const posts = user.publication.posts
  // const postBrief = 
  // const postMarkdown = posts.map((item)=>(item.contentMarkdown))
  createFolders(targetpath)

  // check if the file already exists
  // ask the question here
  // if(fs.existsSync(getFileSavePath(targetpath, post.slug))){
  //   console.log("file already exists")
  // } else {
  // // if file does not already exist, create and save the data in it.
  //   saveFile(postMarkdown, targetpath, post.slug)
  // }
  return postMarkdown
}

function saveFile(data, targetpath, postName){
  fs.writeFileSync(getFileSavePath(targetpath, postName), data)
}

function getFileSavePath(targetpath, postName){
  return path.join(targetpath, postName)
}

export default getPostData;