import * as React from 'react';
import classNames from 'classnames';
import type { CardProps } from '../../utils/types';

function Card(props: CardProps) {
  const { children, className, ...rest } = props;
  return (
    <li className={classNames('card', className)} {...rest}>
      {children}
    </li>
  );
}

export { Card };
