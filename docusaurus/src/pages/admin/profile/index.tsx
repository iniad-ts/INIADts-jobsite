import { userAtom } from '@site/src/atoms/user';
import { AuthLoader } from '@site/src/components/AuthLoader/AuthLoader';
import { apiClient } from '@site/src/utils/apiClient';
import Layout from '@theme/Layout';
import type { MemberModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './index.module.css';

const Profile = () => {
  const [user] = useAtom(userAtom);
  const [member, setMember] = useState<MemberModel | null>(null);

  const fetchMember = useCallback(async () => {
    if (user === null) return;
    const res = await apiClient.members._memberId(user.githubId).$get();
    setMember(res);
  }, [user]);

  useEffect(() => {
    const fetchIntervalId = setInterval(fetchMember, 1000);
    return () => clearInterval(fetchIntervalId);
  }, [fetchMember]);

  return (
    <Layout title="Profile">
      <AuthLoader />
      <div className={styles.container} />
    </Layout>
  );
};

export default Profile;
