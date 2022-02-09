import styles from './Layout.module.css';
import * as React from 'react';
import { LayoutProps } from '../../utils/types';

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <header />
      <main className={styles.main}>{children}</main>
      <footer />
    </div>
  );
}

export { Layout };
