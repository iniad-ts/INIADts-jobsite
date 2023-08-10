import styles from './ContentLayout.module.css';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      {/*TODOここに行番号コンポーネントを入れる*/}
      <div style={{ borderRight: '1px solid #ccc' }} />
      <main>{children}</main>
    </div>
  );
};

export default ContentLayout;
