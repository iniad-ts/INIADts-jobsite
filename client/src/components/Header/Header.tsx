import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.text}>ようこそ</div>
        <div className={styles.cross} />
      </div>
    </>
  );
};
