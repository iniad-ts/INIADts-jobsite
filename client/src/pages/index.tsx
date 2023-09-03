import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { ActivityHistory } from '../components/ActivityHistry/ActivityHistry';
import { Carousel } from '../components/Carousel/Carousel';
import { MemberIcons } from '../components/MemberIcons/MemberIcons';
import MainProducts from '../components/Products/MainProducts';
import { products } from '../data/products';
import styles from './index.module.css';

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="INIAD.tsサイト">
      <div className={styles.container}>
        <div className={styles.top}>
          <h1 className={styles.title}>INIAD.ts</h1>
          <p>INIAD(東洋大学情報連携学部)公認サークル</p>
          <Link to="/about">詳しく見る</Link>
        </div>
        <div className={styles.products}>
          <h2 className={styles.contentTitle}>2023年の主要プロダクト</h2>
          <Carousel carouselData={products} />
        </div>
        <div className={styles.activityHistory}>
          <h2 className={styles.contentTitle}>活動履歴</h2>
          <ActivityHistory />
        </div>
        <div className={styles.products}>
          <MainProducts />
        </div>
        <div className={styles.members}>
          <h2 className={styles.contentTitle}>メンバー</h2>
          <MemberIcons />
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
