import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const NotFound = () => {
  return (
    <Layout title="404 Not Found">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            ページが
            <wbr />
            見つかりません
            <wbr />
            でした。
          </h1>
          <p>404 Not Found</p>
        </div>
        <main className={styles.main}>
          <Link to="/" className={styles.toTop}>
            トップページへ戻る
          </Link>
        </main>
      </div>
    </Layout>
  );
};

export default NotFound;
