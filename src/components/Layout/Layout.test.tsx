import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from './Layout'

describe('<Layout /> tests', function () {
  test('Should render the provided children prop', function () {
    render(<Layout>Hello World</Layout>)
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
  })

  test('Should render provided className prop', function () {
    render(
      <Layout className="wrapper" data-testid="wrapper">
        Hello World
      </Layout>
    )
    expect(screen.getByTestId('wrapper')).toHaveClass('wrapper')
  })

  test('Should contain a nav and footer elements if provided', () => {
    render(
      <Layout nav={<nav />} footer={<footer />}>
        Hello World
      </Layout>
    )
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
