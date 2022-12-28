import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from './Text'

describe('<Text /> tests', function () {
  test('Should render the provided children prop', function () {
    render(<Text>Hello World</Text>)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  test('Should render the provided tagName prop', function () {
    render(<Text tag="h1">Hello World</Text>)
    expect(screen.getByText(/hello World/i).tagName).toBe('H1')
  })

  test('Should assign default props', function () {
    render(<Text>Hello World</Text>)
    expect(screen.getByText(/hello world/i).tagName).toBe('P')
    expect(screen.getByText(/hello world/i)).toHaveClass('color-unknown')
    expect(screen.getByText(/hello world/i)).toHaveClass('font-unknown')
  })
})
