import * as React from 'react';
import { GlobalProps } from '../../utils/types';

function Global(props: GlobalProps) {
  const { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
}

export { Global };
