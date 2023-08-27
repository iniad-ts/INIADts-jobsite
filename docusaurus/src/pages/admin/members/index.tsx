import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import { apiClient } from '@site/src/utils/apiClient';
import Layout from '@theme/Layout';
import type { MemberModel } from 'commonTypesWithClient/models';
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const Members = () => {
  const [members, setMembers] = useState<(MemberModel | null)[]>();

  const fetchMembers = async () => {
    const res = await apiClient.members.$get();
    setMembers(res);
  };

  useEffect(() => {
    const fetchIntervalId = setInterval(fetchMembers, 1000);
    return () => clearInterval(fetchIntervalId);
  }, []);

  return (
    <Layout title="Members">
      <AuthLoader />
      <div className={styles.container}>
        <h1 className={styles.title}>メンバー情報</h1>
        <div>
          <h2>新規追加</h2>
          <div>(仮)</div>
        </div>
        <div>
          <h2>メンバー一覧</h2>
          <div>
            {members?.map((member) => (
              <div key={member?.githubId}>
                <div>{member?.githubId}</div>
                <div>{member?.userName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Members;
