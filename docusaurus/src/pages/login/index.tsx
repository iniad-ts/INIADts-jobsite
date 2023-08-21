import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import { loginWithGitHub } from '@site/src/utils/login';
import Layout from '@theme/Layout';
import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import styles from './index.module.css';

const Login = () => {
  const { addLoading, removeLoading } = useLoading();
  const { siteConfig } = useDocusaurusContext();
  const backgroundImage = useBaseUrl('/img/odaiba.jpg');

  const login = async () => {
    addLoading();
    await loginWithGitHub(siteConfig);
    removeLoading();
  };

  return (
    <Layout title="Login">
      <AuthLoader />
      <div
        className={styles.container}
        style={{ background: `center/cover url(${backgroundImage})` }}
      >
        <div className={styles.main}>
          <div className={styles.title}>next-frourio-starter</div>
          <div style={{ marginTop: '16px' }} onClick={login}>
            <div className={styles.btn}>
              <span>Login with GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
