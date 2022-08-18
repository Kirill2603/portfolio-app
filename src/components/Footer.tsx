import React from 'react'
import { Button, Divider, Heading, Link, List, ListItem } from '@chakra-ui/react'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { EmailIcon, Icon } from '@chakra-ui/icons'

export const Footer = () => {

  const contacts = [
    { source: 'github', link: 'https://github.com/Kirill2603', icon: FaGithub, text: '@Kirill2603' },
    { source: 'telegram', link: 'https://t.me/Kirill2603TG', icon: FaTelegram, text: '@Kirill2603TG' },
    { source: 'mail', link: 'mailto:k.radobolsky@gmail.com', icon: EmailIcon, text: 'k.radobolsky@gmail.com' },
    { source: 'inst', link: 'https://www.instagram.com/kiril_was_here/', icon: FaInstagram, text: '@kiril_was_here' },
  ]

  return (
    <>
      <Divider />
      <Heading as='h2' variant='section-title'>
        Contacts
      </Heading>
      <List alignItems={'start'}>
        {contacts.map(contact =>
          <ListItem key={contact.source}>
            <Link href={contact.link} target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<Icon as={contact.icon} />}>{contact.text}</Button>
            </Link>
          </ListItem>,
        )}
      </List>
    </>
  )
}
