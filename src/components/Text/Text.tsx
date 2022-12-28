import * as React from 'react'
import classNames from 'classnames'
import type { TextProps } from '../../lib/types'

const Text = (props: TextProps) => {
  const {
    className,
    color = 'unknown',
    family = 'unknown',
    tag = 'p',
    weight = 'unknown',
    ...rest
  } = props
  const Tag = tag as keyof JSX.IntrinsicElements
  return (
    <Tag
      className={classNames(
        'Text',
        `color-${color}`,
        `font-${family}`,
        `font-${weight}`,
        className
      )}
      {...rest}
    />
  )
}

export { Text }
