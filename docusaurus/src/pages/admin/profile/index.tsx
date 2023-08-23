import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const Profile = () => {
  return (
    <Layout title="Profile">
      <AuthLoader />
      <div className={styles.container} />
    </Layout>
  );
};

export default Profile;
