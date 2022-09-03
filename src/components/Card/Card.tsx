import * as React from 'react'
import classNames from 'classnames'
import { Box } from '../Box/Box'
import type { CardProps } from '../../utils/types'

const Card = (props: CardProps) => {
  const { className, ...rest } = props
  return <Box className={classNames('card', className)} {...rest} />
}

export { Card }
