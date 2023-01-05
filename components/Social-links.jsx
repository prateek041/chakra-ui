import { IconButton } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialLinks = ({link, icon})=>{
  return (
    <IconButton
    bgColor="#FACD06"
    icon={<FontAwesomeIcon icon={icon}/>}
    borderRadius="100"
    ml={["2", "5"]}
    onClick={() => window.open(link, '_blank')}
  />
  )
}

export default SocialLinks