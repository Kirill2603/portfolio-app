import React from "react";
import {
    Box,
    Center,
    Flex,
    Link,
    Stack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useMediaQuery, IconButton, ButtonGroup,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    SunIcon
} from "@chakra-ui/icons";
import {FaGithub, FaLinkedin} from "react-icons/fa";


export const Header = () => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    const {toggleColorMode} = useColorMode()

    if (isLargerThan1280) {
        return (<div>
            <Flex justify={"space-between"}
                  alignItems={"center"}

                  css={{ backdropFilter: 'blur(10px)' }}
                  position={"fixed"}
                  zIndex={1}
                  w={'50vw'}
            >

                <Box >
                    <Text p={2} fontSize='3xl' fontWeight={'bold'}>Kirill Radobolsky</Text>
                </Box>

                <Stack direction='row' p={2} alignItems={"center"}>

                    <Center p={2}>
                        <FaLinkedin />
                        <Link pl={2} fontSize='2xl' href='https://github.com/Kirill2603'>LinkedIn</Link>
                    </Center>

                    <Center p={2}>
                        <FaGithub />
                        <Link pl={2} fontSize='2xl' href='https://github.com/Kirill2603'>GitHub</Link>
                    </Center>


                    <IconButton aria-label={"set mode"} icon={<SunIcon/>} onClick={toggleColorMode}/>

                </Stack>

            </Flex>

        </div>)
    }
    else {return (
       <>
           <Flex justify={"space-between"}
                 css={{ backdropFilter: 'blur(10px)' }}
                 position={"fixed"}
                 zIndex={1}
                 w={'90vw'}>

           <Box >
               <Text p={2} fontSize='xl' fontWeight={'bold'} >Kirill Radobolsky</Text>
           </Box>

           <Stack direction='row' p={2} alignItems={"center"} >
               <ButtonGroup>
                   <IconButton aria-label={"set mode"} icon={<SunIcon/>} onClick={toggleColorMode}/>

                   <Menu>
                       <MenuButton
                           px={4}
                           py={2}
                           transition='all 0.2s'
                           borderRadius='md'
                           borderWidth='1px'
                           _hover={{ bg: 'gray.400' }}
                           _expanded={{ bg: 'blue.400' }}
                           _focus={{ boxShadow: 'outline' }}
                       >
                           <HamburgerIcon />
                       </MenuButton>
                       <MenuList margin={0}>
                           <MenuItem>
                               <Center p={2}>
                                   <FaGithub />
                                   <Link pl={2} href='https://github.com/Kirill2603'>GitHub</Link>
                               </Center>
                           </MenuItem>
                           <MenuItem>
                               <Center p={2}>
                                   <FaLinkedin />
                                   <Link pl={2} href='https://www.linkedin.com/in/kirill-radobolsky-66131222a'>LinkedIn</Link>
                               </Center>
                           </MenuItem>
                       </MenuList>
                   </Menu>
               </ButtonGroup>


           </Stack>

               </Flex>
       </>
    )}



}

