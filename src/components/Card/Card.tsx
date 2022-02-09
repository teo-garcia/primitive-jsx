import styles from './Card.module.css';
import * as React from 'react';
import classNames from 'classnames';
import { CardProps } from '../../utils/types';

function Card(props: CardProps) {
  const { children, className, ...rest } = props;
  return (
    <li className={classNames(styles.card, className)} {...rest}>
      {children}
    </li>
  );
}

export { Card };
