import type { MemberModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const AdminProfile = () => {
  const [user] = useAtom(userAtom);
  const [member, setmember] = useState<MemberModel>();

  const fetchMenber = useCallback(async () => {
    if (user !== null) {
      const res = await apiClient.members._memberId(user.githubId).$get();
      if (res !== null) {
        setmember(res);
        return;
      }
      alert('Member情報がありません');
    }
  }, [user]);

  useEffect(() => {
    fetchMenber();
  }, [fetchMenber, user]);
  return (
    <div className={styles.container}>
      <Head>
        <title>EditMemberInfo | INIAD.ts</title>
      </Head>

      <h2>YourProfile</h2>
      <div className={styles.plafileTable}>
        <table>
          <tbody>
            <tr>
              <th>githubId:</th>
              <td>{member?.githubId}</td>
            </tr>
            <tr>
              <th>displayName:</th>
              <td>{member?.displayName}</td>
            </tr>
            <tr>
              <th>avatarURL:</th>
              <td>{member?.avatarUrl}</td>
            </tr>
            <tr>
              <th>graduateYear:</th>
              <td>{member?.graduateYear}</td>
            </tr>
            <tr>
              <th>introduction:</th>
              <td>{member?.introduction}</td>
            </tr>
            <tr>
              <th>links:</th>
              <td>{member?.socialLinks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfile;
