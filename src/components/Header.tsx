import React  from 'react'
import {
  Box,
  Flex,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useMediaQuery, 
  IconButton, 
  Button, 
  MenuDivider, 
  Switch, 
  ButtonGroup,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  SunIcon,
} from '@chakra-ui/icons'
import { FaRocket } from 'react-icons/fa'
import { navigationItems } from '../data'
import { MEDIA_QUERIES } from '../constants'

export const Header = () => {
  const [isLargerThan1280] = useMediaQuery(MEDIA_QUERIES.LARGER_THAN_1280)
  const { colorMode, toggleColorMode } = useColorMode()
  
  const onPressNavigateButton = (link: string | null) => {
    link !== null && window.open(link, "_blank")
  }

  return (
    <Box
      position={'fixed'}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      css={{ 
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      _dark={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Flex 
        justify={'space-between'}
        alignItems={'center'}
        py={isLargerThan1280 ? 2 : 1}
        px={0}
        maxW={isLargerThan1280 ? '75vw' : '90vw'}
        mx="auto"
      >
        <Flex direction={'row'} justifyContent={'center'} alignItems={'center'}>
          <IconButton aria-label="portfolio icon" icon={<FaRocket />} variant="ghost" />
          <Text p={2} fontSize={isLargerThan1280 ? '3xl' : 'xl'} fontWeight={'bold'}>
            Kirill Radobolsky
          </Text>
        </Flex>

        {isLargerThan1280 ? (
          <ButtonGroup isAttached variant='solid'>
            {navigationItems.map((item) => (
              <Button 
                key={item.label}
                leftIcon={<item.icon />} 
                onClick={() => onPressNavigateButton(item.href)}
              >
                <Link href={item.href} target='_blank'>
                  {item.label}
                </Link>
              </Button>
            ))}
            <IconButton 
              aria-label={'set mode'} 
              icon={<SunIcon />} 
              onClick={toggleColorMode} 
            />
          </ButtonGroup>
        ) : (
          <Menu>
            <MenuButton as='div'>
              <IconButton aria-label='menu' icon={<HamburgerIcon />} />
            </MenuButton>
            <MenuList width='min'>
              {navigationItems.map((item) => (
                <MenuItem key={item.label} as='a' href={item.href} target='_blank'>
                  <Button leftIcon={<item.icon />} variant='link' size='lg'>
                    {item.label}
                  </Button>
                </MenuItem>
              ))}
              <MenuDivider />
              <MenuItem as='div' onClick={toggleColorMode}>
                <Flex direction='row' alignItems='center' onClick={(event) => event.stopPropagation()}>
                  <Text fontSize='lg' fontWeight='semibold'>Dark theme: </Text>
                  <Switch pl={2} size='md' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  )
}
