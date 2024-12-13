import { Github } from '@/components/icons/github'
import { Linkedin } from '@/components/icons/linkedin'

type Link = {
  path: string
  Icon: (data: { width: string; height: string }) => JSX.Element
}

export const socialLinks: Link[] = [
  {
    path: 'https://github.com/kaiquecamposdev',
    Icon: Github,
  },
  {
    path: 'https://linkedin.com/in/kaiquecamposm',
    Icon: Linkedin,
  },
]
