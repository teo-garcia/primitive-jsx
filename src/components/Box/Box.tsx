import * as React from 'react'
import classNames from 'classnames'
import type { BoxProps } from '../../utils/types'

const Box = (props: BoxProps) => {
  const {
    tag = 'div',
    className,
    background = 'transparent',
    color = 'text',
    ...rest
  } = props
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={classNames(
        'box',
        `color-${color}`,
        `background-${background}`,
        className
      )}
      {...rest}
    />
  )
}

export { Box }
