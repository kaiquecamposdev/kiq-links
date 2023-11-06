import { BookHeart } from '@/components/BookHeart'
import { Discord } from '@/components/Discord'
import { Mail } from '@/components/Mail'
import { Portfolio } from '@/components/Portfolio'

type Links = {
  Icon: (data: { width: string; height: string }) => JSX.Element
  path: string
  text: string
}

export const links: Links[] = [
  {
    Icon: Portfolio,
    path: 'https://links.kaiquecampos.dev',
    text: 'Portfólio (em construção)',
  },
  {
    Icon: Mail,
    path: 'mailto:kaiquedecampos2@gmail.com',
    text: 'Me envie um email!',
  },
  {
    Icon: Discord,
    path: 'https://discord.gg/7e6GYxseBf',
    text: 'Entre na minha comunidade!',
  },
  {
    Icon: BookHeart,
    path: 'https://myanimelist.net/profile/Iam_Kaiqu3',
    text: 'Veja minha lista de animes favoritos!',
  },
]
