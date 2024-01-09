import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Heading,Spacer
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

let Navbar=()=>{

 const isDesktop = useBreakpointValue({ base: false, lg: true })


  return (
    <Box as="section" pb={{ base: '10', md: '10' }} >
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container py={{ base: '4', lg: '2' }} mr='800px'>
          <HStack spacing="1" justify="space-between">
        
            {isDesktop ? (
                          <Flex minWidth='max-content' alignItems='center' gap='350'>
                          <Box p='2'>
                            <Heading size='md'>Task Manager App</Heading>
                          </Box>
                          <Spacer />
                          <ButtonGroup gap='1'>
                           
                              <Box >
                                <Link to="/signup">  
                                  <Button colorScheme='teal' mr="6">Sign Up</Button>
                                </Link>
                                <Link to="/login"> 
                                  <Button colorScheme='teal'>Log in</Button>
                                </Link> 
                              </Box>
                            
                          </ButtonGroup>
                        </Flex>
                        
            ) : (
              <IconButton
                variant="tertiary"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
export default Navbar