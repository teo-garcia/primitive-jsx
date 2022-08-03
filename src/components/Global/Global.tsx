import * as React from 'react';
import type { GlobalProps } from '../../utils/types';

function Global(props: GlobalProps) {
  const { children } = props;
  return <>{children}</>;
}

export { Global };
