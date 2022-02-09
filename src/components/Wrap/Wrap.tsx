import styles from './Wrap.module.css';
import * as React from 'react';
import { WrapProps } from '../../utils/types';

function Wrap(props: WrapProps) {
  return <div className={styles.wrap} {...props} />;
}

export { Wrap };
