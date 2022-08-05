import * as React from 'react';
import classNames from 'classnames';
import type { BoxProps } from '../../utils/types';

function Box(props: BoxProps) {
  const { tag = 'div', className, background, color, ...rest } = props;
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={classNames(
        'typography',
        `color-${color}`,
        `background-${color}`,
        className
      )}
      {...rest}
    />
  );
}

export { Box };
