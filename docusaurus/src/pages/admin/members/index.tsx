import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const Members = () => {
  return (
    <Layout title="Members">
      <AuthLoader />
      <div className={styles.container} />
    </Layout>
  );
};

export default Members;
