import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';
import { About } from '../components/About/About';
import { Activity } from '../components/Activity/Activity';
import { Banner } from '../components/Banner/Banner';
import { Courses } from '../components/Courses/Courses';
import { Leader } from '../components/Leader/Leader';
import styles from './index.module.css';

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="INIAD.tsサイト">
      <div className={styles.container}>
        <Banner />
        <div className={styles.about}>
          <h2 className={styles.contentTitle} id="about">
            <a href="/#about">
              <span>About</span>
              <p>サークルについて</p>
            </a>
          </h2>
          <About />
        </div>
        <Leader />
        <div className={styles.activity}>
          <h2 className={styles.contentTitle} id="activity">
            <a href="/#activity">
              <span>Activity</span>
              <p>今年度の活動</p>
            </a>
          </h2>
          <Activity />
        </div>
        <div className={styles.members}>
          <h2 className={styles.contentTitle} id="courses">
            <a href="/#courses">
              <span>Courses</span>
              <p>コース一覧</p>
            </a>
          </h2>
          <Courses />
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
