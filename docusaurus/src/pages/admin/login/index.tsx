import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import { useLoading } from '@site/src/hooks/useLoading';
import { loginWithGitHub } from '@site/src/utils/login';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';

const Login = () => {
  const { addLoading, removeLoading } = useLoading();
  const { siteConfig } = useDocusaurusContext();

  const login = async () => {
    addLoading();
    await loginWithGitHub(siteConfig);
    removeLoading();
  };

  return (
    <Layout title="Login">
      <AuthLoader />
      <div className={styles.container}>
        <h1>ログイン</h1>
        <button onClick={login} className={styles.button}>
          Login with GitHub
        </button>
      </div>
    </Layout>
  );
};

export default Login;
