import { render, screen } from '@testing-library/react'
import RedemptionLink from './RedemptionLink'

test('Renders key in the link itself.', () => {
    const steamKey ="NOTA-REAL-KEYY"

    render(<RedemptionLink steamKey={steamKey} />)

    const keyElement = screen.getByText(steamKey)
    expect(keyElement).toBeInTheDocument()
})