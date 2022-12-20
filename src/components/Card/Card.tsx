import * as React from 'react'
import classNames from 'classnames'
import type { CardProps } from '@lib/types'
import { Box } from '@components/Box/Box'

const Card = (props: CardProps) => {
  const { className, ...rest } = props
  return <Box className={classNames('card', className)} {...rest} />
}

export { Card }
