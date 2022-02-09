import styles from './Typography.module.css';
import * as React from 'react';
import { TypographyProps } from '../../utils/types';
import classNames from 'classnames';

function Typography(props: TypographyProps) {
  const {
    tagName = 'p',
    className,
    fontWeight = 'regular',
    color = 'text',
    fontType = 'primary',
    ...rest
  } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames(
        'typography',
        styles[`font-${fontWeight}`],
        styles[`font-${fontType}`],
        styles[`color-${color}`],
        className
      )}
      {...rest}
    />
  );
}

export { Typography };
