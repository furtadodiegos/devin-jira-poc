import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Devin POC funcionando</h1>
      <p>Cada ticket do Jira resolvido pelo Devin aparece aqui.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Cliques: {count}
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Zerar
      </button>
    </main>
  )
}

export default App
