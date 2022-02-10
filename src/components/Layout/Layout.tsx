import styles from './Layout.module.css';
import * as React from 'react';
import { LayoutProps } from '../../utils/types';

function Layout(props: LayoutProps) {
  const { children, nav, footer } = props;
  return (
    <div className={styles.layout}>
      {nav ? nav : null}
      <main className={styles.main}>{children}</main>
      {footer ? footer : null}
    </div>
  );
}

export { Layout };
