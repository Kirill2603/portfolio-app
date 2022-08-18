import React from 'react'
import {
  Flex,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useMediaQuery, IconButton, Button, MenuDivider, Switch, ButtonGroup,
} from '@chakra-ui/react'
import {
  EmailIcon,
  HamburgerIcon, Icon,
  SunIcon,
} from '@chakra-ui/icons'
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa'


export const Header = () => {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex justify={'space-between'}
          alignItems={'center'}

          css={{ backdropFilter: 'blur(10px)' }}
          position={'fixed'}
          zIndex={1}
          w={isLargerThan1280 ? '60vw' : '90vw'}
    >

      <Flex direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <Icon as={FaRocket} w={7} h={7} />
        <Text p={2} fontSize={isLargerThan1280 ? '3xl' : 'xl'} fontWeight={'bold'}>Kirill Radobolsky</Text>
      </Flex>

      {isLargerThan1280 ?
        <ButtonGroup isAttached variant='solid'>
          <Button leftIcon={<FaGithub />}>
            <Link href='https://github.com/Kirill2603' target='_blank'>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaLinkedin />}>
            <Link href='https://www.linkedin.com/in/kirill-radobolsky-66131222a' target='_blank'>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<EmailIcon />}>
            <Link href='mailto:k.radobolsky@gmail.com' target='_blank'>
              Mail
            </Link>
          </Button>
          <IconButton aria-label={'set mode'} icon={<SunIcon />} onClick={toggleColorMode} />
        </ButtonGroup>
        :
        <Menu>
          <MenuButton as='div'>
            <IconButton aria-label='menu' icon={<HamburgerIcon />} />
          </MenuButton>
          <MenuList width='min'>
            <MenuItem as='a' href='https://github.com/Kirill2603' target='_blank'>
              <Button leftIcon={<FaGithub />} variant='link' size='lg'>
                GitHub
              </Button>
            </MenuItem>
            <MenuItem as='a' href='https://www.linkedin.com/in/kirill-radobolsky-66131222a' target='_blank'>
              <Button leftIcon={<FaLinkedin />} variant='link' size='lg'>
                LinkedIn
              </Button>
            </MenuItem>
            <MenuItem as='a' href='mailto:k.radobolsky@gmail.com' target='_blank'>
              <Button leftIcon={<EmailIcon />} variant='link' size='lg'>
                Mail
              </Button>
            </MenuItem>
            <MenuDivider />
            <MenuItem as='div'>
              <Flex direction='row' alignItems='center'>
                <Text fontSize='lg' fontWeight='semibold'>Dark theme: </Text>
                <Switch pl={2} size='md' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      }
    </Flex>
  )
}
