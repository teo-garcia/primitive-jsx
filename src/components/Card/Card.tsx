import * as React from 'react'
import classNames from 'classnames'
import type { CardProps } from '../../lib/types'
import { Box } from '../Box/Box'

const Card = (props: CardProps) => {
  const { className, ...rest } = props
  return <Box className={classNames('card', className)} {...rest} />
}

export { Card }
