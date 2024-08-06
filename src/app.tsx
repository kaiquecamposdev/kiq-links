import { Links } from '@/components/links'
import { SocialIcons } from '@/components/social-icons'
import { Switch } from '@/components/ui/switch'
import { Header } from './components/header'

import { useTheme } from '@/contexts/ThemeProvider'

import clsx from 'clsx'

export function App() {
  const { setTheme, theme } = useTheme()

  function handleSetTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    }
  }

  return (
    <div
      className={clsx(
        'flex min-h-screen justify-center bg-gray-900 bg-cover px-4',
        {
          'bg-[url(./assets/bg-light-desktop.svg)]': theme === 'light',
          'bg-[url(./assets/bg-dark-desktop.svg)]': theme === 'dark',
        },
      )}
    >
      <div className="flex w-full max-w-xl flex-col">
        <Header />
        <div className="flex w-full justify-center py-4">
          <Switch onCheckedChange={() => handleSetTheme()} />
        </div>
        <main className="box-border flex w-full flex-col gap-2">
          <nav className="flex flex-1">
            <Links />
          </nav>
          <nav>
            <SocialIcons />
          </nav>
        </main>
        <footer className="box-border flex w-full items-center justify-center font-normal leading-relaxed">
          <p>
            Feito com 💜 por{' '}
            <a
              href="https://github.com/kaiquecamposdev"
              className="transition-[opacity] hover:opacity-90"
            >
              @kaiquecamposdev
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
