export interface Project {
  id: string
  title: string
  subtitle: string
  source: string | null
  icon: string | null
  look: string
  images: string[]
  description: string
  technologies: string[]
}

export interface Technology {
  name: string
  icon: React.ComponentType
}

export interface Skill {
  id: number
  skill: string
  progress: number
}

export interface Contact {
  source: string
  link: string
  icon: React.ComponentType
  text: string
}

export interface NavigationItem {
  label: string
  href: string
  icon: React.ComponentType
}

export interface TechnologiesProp {
  isLargerThan1280: boolean
}
