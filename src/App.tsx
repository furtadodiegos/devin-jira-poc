import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function getInitialTheme(): Theme {
  const saved = localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'

  function toggleTheme() {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return (
    <main>
      <button
        type="button"
        className="theme-toggle"
        aria-label={nextTheme === 'dark' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
        onClick={toggleTheme}
      >
        <span aria-hidden="true">{nextTheme === 'dark' ? '🌙' : '☀️'}</span>
      </button>
      <h1>Meu novo teste com o Devin</h1>
      <img
        src="/devin-logo.png"
        alt="Logo do Devin"
        width={120}
        height={120}
        style={{ display: 'block', width: '100%', maxWidth: 120, height: 'auto', margin: '0 auto' }}
      />
      <p>Claude POC funcionando</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Cliques: {count}
      </button>
    </main>
  )
}

export default App
