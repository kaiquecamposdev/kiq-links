import { Discord } from '@/components/icons/discord';
import { ListCheck } from '@/components/icons/list-check';

type Links = {
  Icon: (data: { width: string; height: string }) => JSX.Element
  path: string
  text: string
}

export const links: Links[] = [
  {
    Icon: Discord,
    path: 'https://discord.gg/7e6GYxseBf',
    text: 'Entre na minha comunidade!',
  },
  {
    Icon: ListCheck,
    path: 'https://myanimelist.net/profile/Iam_Kaiqu3',
    text: 'Veja minha lista de animes favoritos!',
  },
]
