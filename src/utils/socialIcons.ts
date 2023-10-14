import {
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  PhoneCall,
  Twitter,
} from 'lucide-react'

type Link = {
  path: string
  Icon: LucideIcon | string
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
    path: 'https://instagram.com/Iam_kaiqu3',
    Icon: Instagram,
  },
  {
    path: 'https://twitter.com/kaiquecamposm',
    Icon: Twitter,
  },
  {
    path: 'tel:+5513991732041',
    Icon: PhoneCall,
  },
]
