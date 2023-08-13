import type { MemberModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import { useState } from 'react';
import styles from './index.module.css';

const AdminProfile = () => {
  const [member, setmember] = useState<MemberModel>();

  const serchMenber = () => {
    //特定のメンバーを取得するapiをたたく

    console.log('取得');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>EditMemberInfo | INIAD.ts</title>
      </Head>
      <div className={styles.serchTable}>
        <button onClick={() => serchMenber()}>検索</button>
        <input id="idForm" type="text" name="idForm" placeholder="githubIdを入力してください" />
      </div>
      <h2>Profile</h2>
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
              <td>{member?.avatarURL}</td>
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
              <td>{member?.links}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProfile;
