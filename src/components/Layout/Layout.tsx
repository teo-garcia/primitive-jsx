import * as React from 'react';
import { Box } from '../Box/Box';
import type { LayoutProps } from '../../utils/types';

function Layout(props: LayoutProps) {
  const { children, nav = null, footer = null } = props;
  return (
    <Box className="layout">
      {nav}
      <main className="main">{children}</main>
      {footer}
    </Box>
  );
}

export { Layout };
