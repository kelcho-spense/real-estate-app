import { Box, Flex} from '@chakra-ui/react'
import  { BiCopyright } from "react-icons/bi";

const Footer =() => (

    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.400 '>
       <Flex alignContent='center' >
       <BiCopyright  /> 2022  Kelcho-Real-Estate, Inc.
       </Flex>
    </Box>
)


export default Footer;