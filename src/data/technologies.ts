import { Technology } from '../types'
import { FaGit, FaGithub, FaReact, FaUbuntu } from 'react-icons/fa'
import {
  SiAndroidstudio,
  SiChakraui,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGraphql,
  SiJavascript,
  SiKotlin,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiWebstorm,
  SiXcode,
} from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'

export const technologies: Technology[] = [
   // Mobile Development
   { name: 'Flutter', icon: SiFlutter },
   { name: 'Dart', icon: SiDart },
   { name: 'Swift', icon: SiSwift },
   { name: 'Kotlin', icon: SiKotlin },
   
   // Mobile IDEs
   { name: 'Android Studio', icon: SiAndroidstudio },
   { name: 'Xcode', icon: SiXcode },
  // Frontend Technologies
  { name: 'React', icon: FaReact },
  { name: 'React Native', icon: SiReact },
  { name: 'Redux Toolkit', icon: SiRedux },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwindcss', icon: SiTailwindcss },
  { name: 'ChakraUI', icon: SiChakraui },

  // Backend Technologies
  { name: 'Express JS', icon: SiExpress },
  { name: 'MongoDB', icon: DiMongodb },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'GraphQL', icon: SiGraphql },
  
  // Development Tools
  { name: 'Github', icon: FaGithub },
  { name: 'Ubuntu Linux', icon: FaUbuntu },
]
