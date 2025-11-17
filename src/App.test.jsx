import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders Vite + React title', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('has a counter button', () => {
    render(<App />)
    expect(screen.getByText('count is 0')).toBeInTheDocument()
  })
})