import * as React from 'react'
import classNames from 'classnames'
import type { TextFieldProps } from '../../lib/types'

const TextField = (props: TextFieldProps) => {
  const { children, tag = 'input', className, testId, id, ...rest } = props
  return (
    <label
      className={classNames('label', className)}
      htmlFor={id}
      data-testid={testId}
    >
      {children}
      {tag === 'input' ? (
        <input type="text" className="input" id={id} {...rest} />
      ) : (
        <textarea className="textarea" id={id} {...rest} />
      )}
    </label>
  )
}

export { TextField }
