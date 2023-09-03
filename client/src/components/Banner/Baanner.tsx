import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
  const [isTitleEnd, setIsTitleEnd] = useState(false);
  const initialDescription = '廃人エンジニア育成サークル';

  useEffect(() => {
    const typingEffect = (
      text: string,
      element: Element | null,
      delay: number,
      onEnd: () => void
    ) => {
      let i = 0;
      const typing = () => {
        if (element !== null && i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typing, delay);
        } else {
          onEnd();
        }
      };
      typing();
    };

    const title = document.querySelector(`.${styles.title}`);
    if (title !== null && title.textContent !== null) {
      const titleText = title.textContent || '';
      title.textContent = '';

      typingEffect(titleText, title, 200, () => {
        setIsTitleEnd(true);
      });
    }
  }, []);

  useEffect(() => {
    const description = document.querySelector(`.${styles.description}`);
    if (description === null) return;
    description.textContent = '';

    if (isTitleEnd) {
      const typingEffect = (text: string, element: Element | null, delay: number) => {
        let i = 0;
        const typing = () => {
          if (element !== null && i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delay);
          }
        };
        typing();
      };

      typingEffect(initialDescription, description, 100);
    }
  }, [isTitleEnd]);

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img className={styles.iniadTs} src="/img/INIADts-logo.png" alt="INIAD.tsのロゴ" />
        <img className={styles.iniad} src="/img/INIAD-long-logo.png" alt="INIADのロゴ" />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>INIAD.ts</p>
        <p className={styles.description} />
      </div>
    </div>
  );
};
