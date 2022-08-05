import classNames from 'classnames';
import * as React from 'react';

import { TextFieldProps } from '../../utils/types';

function TextField(props: TextFieldProps) {
  const { children, tag = 'input', className, ...rest } = props;
  return (
    <label className={classNames('label', className)}>
      {children}
      {tag === 'input' ? (
        <input type="text" className="input" {...rest} />
      ) : (
        <textarea className="textarea" {...rest} />
      )}
    </label>
  );
}

export { TextField };
