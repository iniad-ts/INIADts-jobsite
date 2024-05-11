import Link from '@docusaurus/Link';
import { Koujichu } from '@site/src/components/Koujichu/Koujichu';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const Business = () => {
  return (
    <Layout title="企業・団体様向け">
      <Koujichu />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>企業・団体様向け</h1>
          <p>For Business</p>
        </div>
        <main className={styles.main}>
          <section>
            <h2 className={styles.sectionTitle}>スポンサー募集中</h2>
            <p className={styles.sectionText}>
              INIAD.tsでは、スポンサーを募集しています。
              スポンサーになっていただけると、INIAD.tsの活動を支援することができます。
              ぜひ、INIAD.tsのスポンサーになってください。
              また、INIAD.tsでは、スポンサーになっていただいた企業・団体様のロゴを、INIAD.tsのサイトに掲載させていただきます。
              <br />
              <br />
              This sentence is written by GitHub Copilot.
            </p>
            <Link to="/contact" className={styles.link}>
              お問い合わせ
            </Link>
          </section>
          <section>
            <h2 className={styles.sectionTitle}>メンバーの職募集中</h2>
            <p className={styles.sectionText}>
              INIAD.tsのメンバーを雇用していただける企業・団体様を募集しています。
              形態は、インターン、アルバイト、正社員など、様々な形態で募集しています。
              ぜひ、INIAD.tsのメンバーを雇用していただける企業・団体様は、お気軽にお問い合わせください。
              <br />
              <br />
              This sentence is written by GitHub Copilot.
            </p>
            <Link to="/members" className={styles.link}>
              メンバー一覧
            </Link>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Business;
