import { Github, Instagram, Linkedin, Twitter } from '@/components/icons';

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
  {
    path: 'https://instagram.com/iamk_aique',
    Icon: Instagram,
  },
  {
    path: 'https://twitter.com/kaiquecamposm',
    Icon: Twitter,
  },
]
