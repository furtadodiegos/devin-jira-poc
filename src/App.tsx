import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
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
