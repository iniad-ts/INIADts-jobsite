import Link from '@docusaurus/Link';
import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const Admin = () => {
  return (
    <Layout title="Admin">
      <div className={styles.container}>
        <AuthLoader />
        <h1 className={styles.title}>INIAD.ts 管理者向けページ</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/admin/members">メンバー追加・削除</Link>
          </li>
          <li className={styles.item}>
            <Link to="/admin/profile">プロフィール編集</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Admin;
