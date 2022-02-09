import * as React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonProps } from '../../utils/types';

function Button(props: ButtonProps) {
  const {
    className,
    background = 'primary',
    color = 'background',
    fontType = 'primary',
    fontWeight = 'regular',
  } = props;

  return (
    <button
      className={classNames(
        styles.button,
        styles[`font-${fontWeight}`],
        styles[`font-${fontType}`],
        styles[`color-${color}`],
        styles[`background-${background}`],
        className
      )}
      {...props}
    />
  );
}

export { Button };
