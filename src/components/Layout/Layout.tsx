import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header} />
      <aside className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer} />
    </div>
  );
};

export default Layout;
