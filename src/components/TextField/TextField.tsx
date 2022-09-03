import * as React from 'react'
import classNames from 'classnames'
import type { TextFieldProps } from '../../utils/types'

const TextField = (props: TextFieldProps) => {
  const { children, tag = 'input', className, ...rest } = props
  return (
    <label className={classNames('label', className)}>
      {children}
      {tag === 'input' ? (
        <input type="text" className="input" {...rest} />
      ) : (
        <textarea className="textarea" {...rest} />
      )}
    </label>
  )
}

export { TextField }
