import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';

const SUB_TITLE = 'TypeScript プログラミングサークル';

export const Banner = () => {
  const [subTitle, setSubTitle] = useState('');

  const scrollBottom = () => {
    const header = document.getElementsByClassName('navbar')[0];
    const headerHeight = header.clientHeight;

    window.scrollTo({
      top: window.innerHeight - headerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const typingIntervalID = setInterval(() => {
      if (subTitle.length >= SUB_TITLE.length) {
        const subTitleElm = document.getElementsByClassName(styles.typing)[0];

        clearInterval(typingIntervalID);

        subTitleElm.classList.add(styles.typingAnim);
        setTimeout(() => {
          subTitleElm.classList.remove(styles.typingAnim);
          subTitleElm.classList.remove(styles.typing);
        }, 3000);
      }

      setSubTitle(SUB_TITLE.slice(0, subTitle.length + 1));
    }, 100);

    return () => {
      clearInterval(typingIntervalID);
    };
  }, [subTitle.length]);

  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <img src="/img/INIADts-logo.png" alt="INIAD" />
        <img src="/img/INIAD-long-logo.png" alt="INIAD" />
      </div>
      <div className={styles.title}>
        <h1>INIAD.ts</h1>
        <p className={styles.typing}>{subTitle}</p>
      </div>
      <div className={styles.scroll} onClick={scrollBottom}>
        <div className={styles.button} />
        <span>see more.</span>
      </div>
    </div>
  );
};
