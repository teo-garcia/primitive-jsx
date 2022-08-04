import * as React from 'react';
import classNames from 'classnames';
import type { TypographyProps } from '../../utils/types';

function Typography(props: TypographyProps) {
  const {
    className,
    color = 'text',
    family = 'primary',
    tag = 'p',
    weight = 'regular',
    ...rest
  } = props;
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        'typography',
        `color-${color}`,
        `font-${family}`,
        `font-${weight}`,
        className
      )}
      {...rest}
    />
  );
}

export { Typography };
