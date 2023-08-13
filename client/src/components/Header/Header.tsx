import styles from './Header.module.css';

export const Header = ({ title }: { title: string }) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.tab}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.cross} />
        </div>
      </div>
    </>
  );
};
