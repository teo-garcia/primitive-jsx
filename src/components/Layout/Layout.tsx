import * as React from 'react'
import classNames from 'classnames'
import type { LayoutProps } from '../../utils/types'
import { Box } from '../Box/Box'

const Layout = (props: LayoutProps) => {
  const { children, nav = null, footer = null, className, ...rest } = props
  return (
    <Box className={(classNames('layout'), className)} {...rest}>
      {nav}
      <main className="main">{children}</main>
      {footer}
    </Box>
  )
}

export { Layout }
