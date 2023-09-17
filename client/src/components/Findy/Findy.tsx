import React from 'react';
import styles from './FIndy.module.css';

type Props = {
  score: number;
};

export const Findy = ({ score }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.score}>{score}.0</div>
        <div className={styles.wave}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <defs>
              <path
                d="M 0,0 v 100,0 q 150,50 300,0 t 300,0 q 150,50 300,0 t 300,0 v 0,-100 Z"
                id="wave"
              />
            </defs>
            <use xlinkHref="#wave" x="-250" fill="#357ad1" />
            <use xlinkHref="#wave" x="0" fill="#1d6dcb" />
          </svg>
        </div>
      </div>
    </div>
  );
};
