import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { ActivityHistory } from '../components/ActivityHistory/ActivityHistory';
import { Banner } from '../components/Banner/Baanner';
import { Carousel } from '../components/Carousel/Carousel';
import { CourseDescription } from '../components/CourseDescription/CourseDescription';
import MainProducts from '../components/MainProducts/MainProducts';
import { products } from '../data/products';
import styles from './index.module.css';

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="INIAD.tsサイト">
      <div className={styles.container}>
        <Banner />
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
          <h2 className={styles.contentTitle}>コース</h2>
          <CourseDescription />
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
