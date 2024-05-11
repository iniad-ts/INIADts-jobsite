import { Koujichu } from '@site/src/components/Koujichu/Koujichu';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const About = () => {
  return (
    <Layout title="About">
      <Koujichu />
      <div className="container">
        <div className={styles.title}>
          <h1>INIAD.tsについて</h1>
          <p>About</p>
        </div>
        <main className={styles.main}>
          <section>
            <h2 className={styles.contentTitle}>INIAD.tsとは</h2>
            <p className={styles.contentText}>
              INIAD.tsは、INIAD(東洋大学情報連携学部)の学生による、主にTypeScriptを用いた開発を行うサークルです。
              TypeScriptに加えてReactやNext.js、Node.js、Frourioなどの技術を用いて、Webアプリケーションの開発を行っています。
              また、GitやDB、Dockerなどの技術についても学んでいます。 INIAD
              Fesやハッカソンで発表したり、個人で開発したものを公開したりしています。 <br />
              <br />
              This sentence is written by GitHub Copilot.
            </p>
          </section>
          <section>
            <h2 className={styles.contentTitle}>活動内容</h2>
            <p className={styles.contentText}>
              INIAD.tsでは、毎週木曜日に活動を行っています。活動内容は、以下の通りです。
            </p>
            <ul className={styles.contentList}>
              <li>技術勉強会</li>
              <li>開発</li>
              <li>LT会</li>
            </ul>
            <p className={styles.contentText}>
              また、毎週金曜日には、INIAD.tsのメンバーが開発したものを発表する会を行っています。
              この会では、INIAD.tsのメンバーが、自分が開発したものを発表します。
              発表するものは、個人で開発したものや、INIAD.tsのメンバーと共同で開発したものなど、様々です。
              また、発表するものは、Webアプリケーションだけでなく、ゲームやツールなどもあります。
              発表するものは、GitHubやYouTubeなどで公開しています。
              <br />
              <br />
              This sentence is written by GitHub Copilot.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default About;
