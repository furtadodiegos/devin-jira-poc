import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import App from './App'

afterEach(cleanup)

test('incrementa o contador a cada clique', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Cliques: 0' })

  fireEvent.click(button)

  expect(button.textContent).toBe('Cliques: 1')
})

test('mostra o título "Devin POC funcionando"', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Devin POC funcionando')
})

test('mostra o subtítulo "Claude POC funcionando"', () => {
  render(<App />)

  expect(screen.getByText('Claude POC funcionando').tagName).toBe('P')
})
