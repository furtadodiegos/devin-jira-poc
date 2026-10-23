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

test('botão "Zerar" volta o contador para 0', () => {
  render(<App />)
  const counter = screen.getByRole('button', { name: 'Cliques: 0' })

  fireEvent.click(counter)
  fireEvent.click(counter)
  expect(counter.textContent).toBe('Cliques: 2')

  fireEvent.click(screen.getByRole('button', { name: 'Zerar' }))

  expect(counter.textContent).toBe('Cliques: 0')
})
