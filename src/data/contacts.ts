import { Contact } from '../types'
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { EmailIcon } from '@chakra-ui/icons'

export const contacts: Contact[] = [
  { source: 'github', link: 'https://github.com/Kirill2603', icon: FaGithub, text: '@Kirill2603' },
  { source: 'telegram', link: 'https://t.me/Kirill2603TG', icon: FaTelegram, text: '@Kirill2603TG' },
  { source: 'mail', link: 'mailto:k.radobolsky@gmail.com', icon: EmailIcon, text: 'k.radobolsky@gmail.com' },
  { source: 'inst', link: 'https://www.instagram.com/kiril_was_here/', icon: FaInstagram, text: '@kiril_was_here' },
]
