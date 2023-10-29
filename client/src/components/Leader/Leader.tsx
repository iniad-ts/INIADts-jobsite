import Link from '@docusaurus/Link';
import React from 'react';
import { IconArticle } from '../icons/IconArticle';
import { IconGithub } from '../icons/IconGitHub';
import styles from './Leader.module.css';

export const Leader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src="https://github.com/g-ratie.png" />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>代表</h2>
          <p className={styles.name}>g-ratie</p>
          <div className={styles.links}>
            <Link href="https://github.com/g-ratie">
              <IconGithub />
            </Link>
            <Link to="/members/g-ratie">
              <IconArticle />
            </Link>
          </div>
          <p className={styles.description}>
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src="https://github.com/AllenShintani.png" />
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>副代表</h2>
          <p className={styles.name}>konjikun</p>
          <div className={styles.links}>
            <Link href="https://github.com/AllenShintani">
              <IconGithub />
            </Link>
            <Link to="/members/AllenShintani">
              <IconArticle />
            </Link>
          </div>
          <p className={styles.description}>
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
    </div>
  );
};
