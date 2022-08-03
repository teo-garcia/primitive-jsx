import * as React from 'react';
import * as styles from './Layout.module.css';
import { Box } from '../Box/Box';
import type { LayoutProps } from '../../utils/types';

function Layout(props: LayoutProps) {
  const { children, nav = null, footer = null } = props;
  return (
    <Box className={styles.layout}>
      {nav}
      <main className={styles.main}>{children}</main>
      {footer}
    </Box>
  );
}

export { Layout };
