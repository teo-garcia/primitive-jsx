import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('<Card /> tests', () => {
  test('Should render provided children prop', function () {
    render(<Card>Hello World</Card>)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  test('Should render provided className prop', function () {
    render(<Card className="wrapper">Hello World</Card>)
    expect(screen.getByText(/hello world/i)).toHaveClass('wrapper')
  })
})
