import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, test } from 'vitest'
import App from './App'

beforeEach(() => {
  localStorage.clear()
  delete document.documentElement.dataset.theme
})

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

test('botão "Zerar" volta o contador para 0', () => {
  render(<App />)
  const counter = screen.getByRole('button', { name: 'Cliques: 0' })

  fireEvent.click(counter)
  fireEvent.click(counter)
  expect(counter.textContent).toBe('Cliques: 2')

  fireEvent.click(screen.getByRole('button', { name: 'Zerar' }))

  expect(counter.textContent).toBe('Cliques: 0')
})

test('mostra o subtítulo "Claude POC funcionando"', () => {
  render(<App />)

  expect(screen.getByText('Claude POC funcionando').tagName).toBe('P')
})

test('alterna o tema ao clicar no botão e salva a escolha', () => {
  render(<App />)
  const toggle = screen.getByRole('button', { name: 'Mudar para tema escuro' })
  expect(document.documentElement.dataset.theme).toBe('light')

  fireEvent.click(toggle)

  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(localStorage.getItem('theme')).toBe('dark')
  expect(toggle.getAttribute('aria-label')).toBe('Mudar para tema claro')

  fireEvent.click(toggle)

  expect(document.documentElement.dataset.theme).toBe('light')
  expect(localStorage.getItem('theme')).toBe('light')
  expect(toggle.getAttribute('aria-label')).toBe('Mudar para tema escuro')
})

test('aplica o tema salvo ao carregar', () => {
  localStorage.setItem('theme', 'dark')

  render(<App />)

  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(screen.getByRole('button', { name: 'Mudar para tema claro' })).toBeTruthy()
})
