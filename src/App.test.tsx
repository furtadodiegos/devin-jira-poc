import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('incrementa o contador a cada clique', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Cliques: 0' })

  fireEvent.click(button)

  expect(button.textContent).toBe('Cliques: 1')
})
