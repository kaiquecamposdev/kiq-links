import { FileText, HomeIcon, LucideIcon, Mail, Network } from 'lucide-react'

type Links = {
  Icon: LucideIcon
  path: string
  text: string
}

export const links: Links[] = [
  {
    Icon: FileText,
    path: 'https://links.kaiquecampos.dev',
    text: 'Portfólio (em construção)',
  },
  {
    Icon: Mail,
    path: 'mailto:kaiquedecampos2@gmail.com',
    text: 'Me envie um email!',
  },
  {
    Icon: Network,
    path: 'https://discord.gg/7e6GYxseBf',
    text: 'Entre na minha comunidade!',
  },
  {
    Icon: HomeIcon,
    path: 'https://myanimelist.net/profile/Iam_Kaiqu3',
    text: 'Veja minha lista de animes favoritos!',
  },
]
