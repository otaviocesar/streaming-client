import { render, screen } from '@testing-library/react'

import Download from '.'

describe('<Download />', () => {
  it('should render the heading', () => {
    const { container } = render(<Download />)

    expect(
      screen.getByRole('heading', { name: /Download/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
