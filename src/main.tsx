import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '@/contexts/ThemeProvider.tsx'
import { App } from './app.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <App />
  </ThemeProvider>,
)
