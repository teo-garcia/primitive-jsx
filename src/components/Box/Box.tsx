import * as React from 'react';
import type { BoxProps } from '../../utils/types';

function Box(props: BoxProps) {
  const { tagName = 'div' } = props;
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return <Tag {...props} />;
}

export default Box
