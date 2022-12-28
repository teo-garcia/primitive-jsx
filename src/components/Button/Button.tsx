import * as React from 'react'
import classNames from 'classnames'
import type { ButtonProps } from '../../lib/types'

const Button = (props: ButtonProps) => {
  const {
    className,
    background = 'unknown',
    color = 'unknown',
    family = 'unknown',
    weight = 'unknown',
    ...rest
  } = props

  return (
    <button
      className={classNames(
        'button',
        `font-${family}`,
        `font-${weight}`,
        `color-${color}`,
        `background-${background}`,
        className
      )}
      {...rest}
    />
  )
}

export { Button }
