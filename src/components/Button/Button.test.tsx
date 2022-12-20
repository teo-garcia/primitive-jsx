import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('<Button /> tests', () => {
  test('Should render provided children prop', () => {
    render(<Button>Hello World</Button>)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  test('Should render provided className prop', () => {
    render(<Button className="button">Hello World</Button>)
    expect(screen.getByText(/hello world/i)).toHaveClass('button')
  })

  test('Should call provided event handlers', async () => {
    const user = userEvent.setup()
    const mockEventHandler = jest.fn()
    render(<Button onClick={mockEventHandler}>Hello World</Button>)
    await user.click(screen.getByText(/hello world/i))
    expect(mockEventHandler).toHaveBeenCalled()
  })
})
