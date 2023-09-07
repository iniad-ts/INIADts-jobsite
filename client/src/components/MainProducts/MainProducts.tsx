import React from 'react';
import styles from './MainProducts.module.css';

const MainProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topImg}>
        <img src="/img/odaiba.jpg" alt="" />
      </div>
      <div className={styles.wrapper}>
        <video controls src="/img/furya.mp4" width={'100%'} />
        <video controls src="/img/furya.mp4" width={'100%'} />
        <video controls src="/img/furya.mp4" width={'100%'} />
        <video controls src="/img/furya.mp4" width={'100%'} />
      </div>
    </div>
  );
};

export default MainProducts;
