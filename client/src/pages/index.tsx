import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { ActivityHistory } from '../components/ActivityHistory/ActivityHistory';
import { Banner } from '../components/Banner/Banner';
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
          <h2 className={styles.contentTitle} id="products">
            <a href="/#products">
              <span>Products</span>
              <p>プロダクト</p>
            </a>
          </h2>
          <Carousel carouselData={products} />
        </div>
        <div className={styles.activityHistory}>
          <h2 className={styles.contentTitle} id="activity">
            <a href="/#activity">
              <span>Activity</span>
              <p>活動内容</p>
            </a>
          </h2>
          <Activity />
        </div>
        <div className={styles.members}>
          <h2 className={styles.contentTitle} id="coruses">
            <a href="/#courses">
              <span>Courses</span>
              <p>コース一覧</p>
            </a>
          </h2>
          <CourseDescription />
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
