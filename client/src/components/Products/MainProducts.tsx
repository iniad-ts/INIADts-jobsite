import React from 'react';
import styles from './MainProducts.module.css';

const MainProducts = () => {
  return (
    <div className={styles.container}>
      <video controls src="/img/furya.mp4" />
    </div>
  );
};

export default MainProducts;
