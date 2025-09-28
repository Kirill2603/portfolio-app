import React from 'react'
import { Button, Divider, Heading, Link, List, ListItem } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { contacts } from '../data'

export const Footer = () => {
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
