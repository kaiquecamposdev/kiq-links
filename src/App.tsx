import { Links } from '@/components/Links'
import { SocialIcons } from '@/components/SocialIcons'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/contexts/ThemeProvider'
import clsx from 'clsx'
import { Header } from './components/Header'

export function App() {
  const { setTheme, theme } = useTheme()

  function handleSetTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    }
  }

  const baseClasses =
    'flex min-h-screen px-4 justify-center bg-gray-900 bg-cover'
  const combinedClasses = clsx(baseClasses, {
    'bg-[url(./assets/bg-light-desktop.svg)]': theme === 'light',
    'bg-[url(./assets/bg-dark-desktop.svg)]': theme === 'dark',
  })

  return (
    <div className={combinedClasses}>
      <div className="flex w-full max-w-xl flex-col">
        <Header />
        <div className="flex w-full justify-center">
          <Switch onCheckedChange={() => handleSetTheme()} />
        </div>
        <main className="box-border flex w-full flex-col gap-2 p-6">
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
