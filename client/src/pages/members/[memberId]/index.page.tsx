import type { MemberModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import MemberInfo from 'src/components/MemberInfo/MemberInfo';
import { apiClientS3 } from 'src/utils/apiClient';
import styles from './index.module.css';

const MemberPage = () => {
  const [member, setMember] = useState<MemberModel>();
  const router = useRouter();
  const [queryId] = useState<string>(
    Array.isArray(router.query.memberId) ? router.query.memberId[0] : router.query.memberId ?? ''
  );

  const fetchMember = useCallback(async () => {
    const res = await apiClientS3.members._memberId(queryId).info_json.$get();

    if (res === null) return;

    setMember(res);
  }, [queryId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMember();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fetchMember]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{member?.displayName ?? queryId} | INIAD.ts</title>
      </Head>
      <MemberInfo name="name" value={member?.displayName} />
      <MemberInfo name="realName" value={member?.realName} />
      <MemberInfo name="id" value={member?.githubId} />
      <MemberInfo name="graduateYear" value={member?.graduateYear} />
      <MemberInfo name="products" value={member?.products} />
      <MemberInfo name="links" value={member?.socialLinks} />
    </div>
  );
};

export default MemberPage;
