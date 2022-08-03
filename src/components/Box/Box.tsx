import * as React from 'react';
import type { BoxProps } from '../../utils/types';

function Box(props: BoxProps) {
  const { tag = 'div', ...rest } = props;
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag {...rest} />;
}

export { Box };
