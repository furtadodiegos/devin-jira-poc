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

test('mostra o título "teste do Luan"', () => {
  render(<App />)

  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('teste do Luan')
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
