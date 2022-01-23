import { render, screen } from '@testing-library/react'

import Top from '.'

describe('<Top />', () => {
  it('should render the heading', () => {
    const { container } = render(<Top />)

    expect(screen.getByRole('heading', { name: /Top/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
