import {Text, Heading, Stack, VStack, HStack, Box} from '@chakra-ui/react'
import profileImage from "../public/profile.jpg"
import Image from "next/image"
import SocialLinks from './Social-links'
import {twitter, linkedin, github} from "../utils/socials"
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Profile = ()=>{
  return (
    <Stack direction={['column', 'row']} spacing="4" className="profile-vstack" align="center" justify="center" m={0}>
        <Box className="image-box" p={["4", "8", "16"]} bgGradient='linear(to-r, #FACD06, #F89F8C)' borderRadius="50">
        <Image
          width={300}
          src={profileImage}
          style={{borderRadius: "50%"}}
        />
        </Box>
      <VStack fontFamily="mono" align="left" justify="center" p={8}>
        <Text fontSize={["1xl", "4xl"]} bgGradient='linear(to-r, #F89F8C)' bgClip="text">
          Hey there ! I'm
        </Text>
        <Heading fontSize={["4xl", "8xl"]} fontWeight="extrabold" fontFamily="mono">
            Prateek Singh
        </Heading>
        <Text maxW="2xl">
          I am an Engineering student and a full stack Web Developer, but exploration has no limits !
        </Text>
      </VStack>
      <HStack>
        <SocialLinks link={twitter} icon={faTwitter} />
        <SocialLinks link={linkedin} icon={faLinkedin} />
        <SocialLinks link={github} icon={faGithub} />
      </HStack>
    </Stack>
  )
}