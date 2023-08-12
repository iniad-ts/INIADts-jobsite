import styles from './Header.module.css';

export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.text}>{title}</div>
        <div className={styles.cross} />
      </div>
    </>
  );
};
