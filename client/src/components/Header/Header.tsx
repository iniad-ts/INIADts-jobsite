import type { CSSProperties } from 'react';
import styles from './Header.module.css';

export const Header = ({ title }: { title: string }) => {
  const isError = ['400', '404', '405', '500'].map((code) => title.includes(code)).some((x) => x);

  const errorStyle: CSSProperties = {
    color: isError ? 'var(--color-error)' : 'var(--color-fg-main)',
    textDecoration: isError ? 'line-through' : 'none',
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.tab}>
          <h1 className={styles.title} style={errorStyle}>
            {title}
          </h1>
          <div className={styles.cross} />
        </div>
      </div>
    </>
  );
};
