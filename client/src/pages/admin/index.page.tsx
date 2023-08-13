import aspida from '@aspida/axios';
import type { MemberModel } from 'commonTypesWithClient/models';
import 'firebase/auth';
import { useAtom } from 'jotai';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { logout } from 'src/utils/login';
import api from '../../api/$api';
import styles from './index.module.css';

const Admin = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const [data, setData] = useState<MemberModel>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(false);
    const apiClient = api(aspida());
    if (user?.displayName === undefined) return;
    apiClient.members
      ._memberId(user?.displayName)
      .info_json.$get()
      .then(async (res) => {
        if (res !== null) {
          setData(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [user]);

  useEffect(() => {
    if (user?.displayName === undefined) return;
    fetchData();
    console.log(data);
    //TODO: メンバーリストを作成したら、メンバー以外のログインを弾くようにする
    // if (data === undefined) {
    //   router.push('/admin/login');
    // }
  }, [fetchData, data, user]);

  if (!user) {
    router.push('/admin/login');
    return <div>redirecting...</div>;
  }

  const onLogout = async () => {
    if (confirm('Logout?')) await logout();
  };
  console.log(data);

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
      <div>
        {/* デバッグ用に以下のuser内のデータを表示しています。 */}
        <h2>ユーザー情報</h2>
        <p>ユーザー名: {user?.displayName}</p>
        <p>写真URL{user?.photoURL}</p>
        <p>ユーザーID: {user?.id}</p>
        <p>githubID:{user.githubid}</p>
        <button onClick={onLogout}>ログアウト</button>
      </div>
    </div>
  );
};

export default Admin;
