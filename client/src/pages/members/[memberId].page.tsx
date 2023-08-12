import type { MemberModel } from 'commonTypesWithClient/models';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import MemberInfo from 'src/components/MemberInfo/MemberInfo';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const MemberPage = () => {
  const [member, setMember] = useState<MemberModel>();
  const router = useRouter();
  const [queryId] = useState<string>(
    Array.isArray(router.query.memberId) ? router.query.memberId[0] : router.query.memberId ?? ''
  );

  const fetchMember = useCallback(async () => {
    const res = await apiClient.member.$get({ query: { githubId: queryId } });

    if (res === null) return;

    setMember(res);
  }, [queryId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMember();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fetchMember]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (queryId === undefined) {
    return <div>Member ID is undefined</div>;
  }

  return (
    <div className={styles.container}>
      <MemberInfo name="name" value={member?.displayName} />
      <MemberInfo name="id" value={member?.githubId} />
      <MemberInfo name="graduateYear" value={member?.graduateYear} />
      <MemberInfo name="links" value={member?.links} />
    </div>
  );
};

export default MemberPage;
