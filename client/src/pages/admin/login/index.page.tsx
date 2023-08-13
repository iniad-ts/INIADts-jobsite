import Head from 'next/head';
import { useRouter } from 'next/router';
import { GithubIcon } from 'src/components/icons/GithubIcon';
import { loginWithGitHub } from 'src/utils/login';
import { useLoading } from '../../@hooks/useLoading';
import styles from './index.module.css';

const Login = () => {
  const router = useRouter();
  const { addLoading, removeLoading } = useLoading();
  const login = async () => {
    addLoading();
    await loginWithGitHub();
    removeLoading();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | INIAD.ts</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.title}>INIAD.ts</div>
        <div style={{ marginTop: '16px' }} onClick={login}>
          <div className={styles.btn}>
            <GithubIcon size={18} fill="#fff" />
            <span>Login with GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
