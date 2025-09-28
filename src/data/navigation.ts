import { NavigationItem } from '../types'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { EmailIcon } from '@chakra-ui/icons'

export const navigationItems: NavigationItem[] = [
  { label: 'GitHub', href: 'https://github.com/Kirill2603', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kirill2603/', icon: FaLinkedin },
  { label: 'Mail', href: 'mailto:k.radobolsky@gmail.com', icon: EmailIcon },
]
