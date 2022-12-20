import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Box } from './Box'

describe('<Box /> tests', () => {
  test('Should render provided children prop', function () {
    render(<Box>Hello World</Box>)
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
  })

  test('Should render provided className prop', function () {
    render(<Box className="wrapper">Hello World</Box>)
    expect(screen.getByText(/hello world/i)).toHaveClass('wrapper')
  })

  test('Should call provided event handlers', async () => {
    const user = userEvent.setup()
    const mockEventHandler = jest.fn()
    render(<Box onClick={mockEventHandler}>Hello World</Box>)
    await user.click(screen.getByText(/hello world/i))
    expect(mockEventHandler).toHaveBeenCalled()
  })

  test('Should render provided tag name', () => {
    render(
      <Box className="wrapper" tag="section">
        Hello World
      </Box>
    )
    expect(screen.getByText(/hello world/i).tagName).toBe('SECTION')
  })

  test('Should render a div by default', () => {
    render(<Box className="wrapper">Hello World</Box>)
    expect(screen.getByText(/hello world/i).tagName).toBe('DIV')
  })
})
