import * as React from 'react';
import * as styles from './Button.module.css';
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
        styles.button,
        styles[`font-${family}`],
        styles[`font-${weight}`],
        styles[`color-${color}`],
        styles[`background-${background}`],
        className
      )}
      {...rest}
    />
  );
}

export { Button };
