import { useAtom } from 'jotai';
import Head from 'next/head';
import Link from 'next/link';
import { userAtom } from 'src/atoms/user';
import styles from './index.module.css';

const Admin = () => {
  const [user] = useAtom(userAtom);

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin | INIAD.ts</title>
      </Head>
      <h1># Admin</h1>
      <Link href="/admin/members" className={styles.button}>
        <div>ユーザーの追加・一覧</div>
      </Link>
      <Link href="/admin/profile" className={styles.button}>
        <div>プロフィールの編集</div>
      </Link>
    </div>
  );
};

export default Admin;
