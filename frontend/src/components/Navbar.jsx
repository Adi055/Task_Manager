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
import { useEffect, useState } from 'react'

import { FiMenu } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

let Navbar=()=>{

 const isDesktop = useBreakpointValue({ base: false, lg: true })
 const [forceUpdate, setForceUpdate] = useState(false);
  const navigate=useNavigate()

 const Logout=()=>{
  localStorage.clear();
  setForceUpdate(prevForceUpdate => !prevForceUpdate);
  console.log("1");
  navigate("/login")
 }

 useEffect(() => {
  // Your logic to run after each re-render
  console.log('Component re-rendered');
}, [forceUpdate]);


  return (
    <Box as="section" pb={{ base: '10', md: '10' }} >
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <Container py={{ base: '4', lg: '2' }} mr='800px'>
          <HStack spacing="1" justify="space-between">
        
            {isDesktop ? (
                          <Flex minWidth='max-content' alignItems='center' gap='270'>
                          <Box p='2'>
                            <Heading size='md'>Task Manager App</Heading>
                          </Box>
                          <Spacer />
                          <ButtonGroup gap='15'>
                           
                              <Box >
                               
                                <Link to="/addtasks">
                                <Button colorScheme='teal' mr="8">Add Tasks</Button>
                                </Link>
                                <Link to="/yourtasks" >
                                <Button colorScheme='teal' mr="8">Your Tasks</Button>
                                </Link>
                                </Box>
                                {
                                  localStorage.length>1?(
                                    <Button colorScheme='teal' mr="8" onClick={Logout}>Logout</Button>
                                  )
                                  :(
                                    <Box>
                                    <Link to="/">  
                                    <Button colorScheme='teal' mr="8">Sign Up</Button>
                                  </Link>
                                  <Link to="/login"> 
                                    <Button colorScheme='teal' mr="8">Log in</Button>
                                  </Link> 
                                  </Box>
                                  )
                                }
                               
                             
                            
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