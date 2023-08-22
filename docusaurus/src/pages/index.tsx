import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { AuthLoader } from '../components/AuthLoader/AuthLoader';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="job site for INIAD.ts">
      <AuthLoader />
      <main>
        <div className={styles.top}>
          <h1 className={styles.title}>INIAD.ts</h1>
          <p>INIAD公認サークル(予定)・INIAD.tsのサイトです</p>
        </div>
        <div className={styles.section}>
          <h2># About INIAD.ts</h2>
          <p className={styles.text}>
            ここにINIAD.tsについての説明を書く
            <br />
            typescriptを主に使用している旨、 <br />
            また、どのような活動をしているかを書く
          </p>
          <div className={styles.link}>
            <Link to="/members">INIAD.tsメンバー一覧</Link>
          </div>
        </div>
        <div className={styles.section}>
          <h2># About this site</h2>
          <p className={styles.text}>
            この就職サイトについての説明を書く
            <br />
            我々の目的や、双方へのメリットを記載する
            <br />
            また、どのような機能やページがあるかをわかりやすくまとめる
          </p>
          <div className={styles.link}>
            <Link to="/contact">お問い合わせ</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
