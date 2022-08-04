import * as React from 'react';
import classNames from 'classnames';
import type { ButtonProps } from '../../utils/types';

function Button(props: ButtonProps) {
  const {
    className,
    background = 'primary',
    color = 'background',
    family = 'primary',
    weight = 'regular',
    ...rest
  } = props;

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
  );
}

export { Button };
