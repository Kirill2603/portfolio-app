import React from "react";
import {Button, Center, Divider, Flex, Heading, Link, List, ListItem, Stack} from "@chakra-ui/react";
import {FaGithub, FaInstagram, FaTelegram} from "react-icons/fa";
import {EmailIcon, Icon} from "@chakra-ui/icons";

export const Footer = () => {
    return (
      <>
          <Divider />
              <Heading as="h2" variant="section-title">
                  Contacts
              </Heading>

                <List alignItems={"start"}>
                    <ListItem>
                        <Link href={'https://github.com/Kirill2603'}>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={FaGithub} />}>@Kirill2603</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'https://t.me/Kirill2603TG'}>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={FaTelegram} />}>@Kirill2603TG</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'mailto:killrill2603@gmail.com'}>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={EmailIcon}/>}>killrill2603@gmail.com</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={'https://www.instagram.com/kiril_was_here/'}>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={FaInstagram}/>}>@kiril_was_here</Button>
                        </Link>
                    </ListItem>

                </List>
      </>
    )
}