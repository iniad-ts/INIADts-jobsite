import styles from './WelcomePage.module.css';

export const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.slash_row} id={styles.main_title}>
          #INIAD.ts
        </div>
        <div className={styles.normal_row}>INIAD.ts就職サイトへようこそ</div>
        <div className={styles.slash_row}>就活サイトである旨</div>
        <div className={styles.normal_row}>oooooooooooooooooooです</div>
        <div className={styles.slash_row}>TSがメインである旨</div>
        <div className={styles.normal_row}>oooooooooooooooooooです</div>
        <div className={styles.slash_row}>最終更新</div>
        <div className={styles.normal_row}>2023/08/01</div>
      </div>
    </div>
  );
};
