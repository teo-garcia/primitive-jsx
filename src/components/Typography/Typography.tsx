import * as React from 'react'
import * as styles from './Typography.module.css';
import classNames from 'classnames';
import type { TypographyProps } from '../../utils/types';

function Typography(props: TypographyProps) {
  const {
    className,
    color = 'text',
    family = 'primary',
    tagName = 'p',
    weight = 'regular',
    ...rest
  } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        'typography',
        styles[`color-${color}`],
        styles[`font-${family}`],
        styles[`font-${weight}`],
        className
      )}
      {...rest}
    />
  );
}

export default Typography
