import React from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
  const scrollBottom = () => {
    const header = document.getElementsByClassName('navbar')[0];
    const headerHeight = header.clientHeight;

    window.scrollTo({
      top: window.innerHeight - headerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <img src="/img/INIADts-logo.png" alt="INIAD" />
        <img src="/img/INIAD-long-logo.png" alt="INIAD" />
      </div>
      <div className={styles.title}>
        <h1>INIAD.ts</h1>
        <p>TypeScript エンジニアサークル</p>
      </div>
      <div className={styles.scroll} onClick={scrollBottom}>
        <div className={styles.button} />
        <span>see more.</span>
      </div>
    </div>
  );
};
