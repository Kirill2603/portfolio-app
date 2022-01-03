import React from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Link,
    Spacer,
    Stack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react'
import {
    ChevronDownIcon,
    SunIcon
} from "@chakra-ui/icons";
import {FaGithub} from "react-icons/fa";


export const Header = () => {

    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

    const {colorMode, toggleColorMode} = useColorMode()

    if (isLargerThan1280) {
        return (<div>
            <Flex justify={"center"}>

                <Box >
                    <Text p={2} fontSize='3xl' fontWeight={'bold'}>Kirill Radobolsky</Text>
                </Box>

                <Spacer/>




                <Link p={2} fontSize='2xl'>Projects</Link>

                <Center p={2}>
                    <FaGithub />
                    <Link pl={2} fontSize='2xl' href='https://github.com/Kirill2603'>GitHub</Link>
                </Center>

                <Spacer/>
                <Spacer/>

                <Stack direction='row' p={2}>
                    <Button
                        onClick={toggleColorMode}
                        leftIcon={<SunIcon/>} variant='solid'>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </Stack>

            </Flex>

        </div>)
    }
    else {return (
       <>
           <Flex justify={"space-between"}>

           <Box >
               <Text p={2} fontSize='xl' fontWeight={'bold'} >Kirill Radobolsky</Text>
           </Box>

           <Stack direction='row' p={2}>
               <Button
                   onClick={toggleColorMode}
                   leftIcon={<SunIcon/>} variant='solid'>
               </Button>

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
                       <ChevronDownIcon />
                   </MenuButton>
                   <MenuList>
                       <MenuItem>
                           <Center p={2}>
                               <FaGithub />
                               <Link pl={2} href='https://github.com/Kirill2603'>GitHub</Link>
                           </Center>
                       </MenuItem>
                       <MenuItem>
                           <Link p={2}>Projects</Link>
                       </MenuItem>
                   </MenuList>
               </Menu>
           </Stack>

               </Flex>
       </>
    )}



}

