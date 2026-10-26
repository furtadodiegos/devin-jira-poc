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

test('mostra o título "Meu novo teste com o Devin"', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Meu novo teste com o Devin')
})

test('mostra a logo do Devin entre o título e o contador', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { level: 1 })
  const logo = screen.getByRole('img', { name: 'Logo do Devin' })
  const button = screen.getByRole('button', { name: 'Cliques: 0' })

  expect(logo.getAttribute('src')).toBe('/devin-logo.png')
  expect(logo.style.maxWidth).toBe('120px')
  expect(logo.style.height).toBe('auto')
  expect(heading.compareDocumentPosition(logo) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  expect(logo.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
})

test('mostra o subtítulo "Claude POC funcionando"', () => {
  render(<App />)

  expect(screen.getByText('Claude POC funcionando').tagName).toBe('P')
})
