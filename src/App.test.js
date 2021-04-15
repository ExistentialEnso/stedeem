import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders "None" message in initial state.', () => {
    render(<App />)
    const noneElement = screen.getByText(/none/i)
    expect(noneElement).toBeInTheDocument()
})