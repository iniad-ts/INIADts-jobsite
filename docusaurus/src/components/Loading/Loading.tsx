import React from 'react';
import styles from './Loading.module.css';
import { Portal } from './Portal';

export const Loading = (props: { visible: boolean }) => {
  return (
    props.visible && (
      <Portal>
        <div className={styles.container}>
          <div className={styles.loader} />
        </div>
      </Portal>
    )
  );
};
