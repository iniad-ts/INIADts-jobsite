import 'firebase/auth';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { userAtom } from 'src/atoms/user';
import { logout } from 'src/utils/login';
import styles from './index.module.css';

const AuthError = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);

  const onLogout = async () => {
    if (confirm('Logout?')) await logout();
  };
  if (!user) {
    router.push('/admin/login');
    return <div>redirecting...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login Error | INIAD.ts</title>
      </Head>
      <div style={{ color: 'white', padding: '20px' }}>
        <h1>Login Error</h1>
        <p>このアカウントには管理ページのアクセス権限がありません。</p>
        <button onClick={onLogout} className={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthError;
