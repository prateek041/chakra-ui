import { Avatar, Flex, Text, IconButton } from "@chakra-ui/react"
import SocialLinks from "./Social-links"
import {twitter, linkedin, github} from "../utils/socials"
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
// import profilePhoto from "../public/profile.jpg"

const profileImage = "https://avatars.githubusercontent.com/u/89681447?v=4"

const BlogHeader = ({name})=>{
  return (
    <Flex align="center" justify="space-between">
      {/* Why is the image not working when pushed through local way */}
      <Flex align="center">
        <Avatar size='lg' src={profileImage}/>
        <Text ml={5} fontSize={["md", "2xl"]} fontWeight="bold" >{name}</Text>
      </Flex>
      <Flex>
        <SocialLinks link={twitter} icon={faTwitter} />
        <SocialLinks link={linkedin} icon={faLinkedin} />
        <SocialLinks link={github} icon={faGithub} />
      </Flex>
    </Flex>
  )
}

export default BlogHeader