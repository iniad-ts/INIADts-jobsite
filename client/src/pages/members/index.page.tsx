import type { MemberList } from 'commonTypesWithClient/models';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClientS3 } from 'src/utils/apiClient';
import styles from './index.module.css';

const Members = () => {
  const [members, setMembers] = useState<MemberList>();
  const fetchMemberList = async () => {
    const memberList = await apiClientS3.members.membersList_json.$get();
    setMembers(memberList);
  };

  useEffect(() => {
    const IntervalId = setInterval(() => fetchMemberList(), 1000);
    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Members | INIAD.ts</title>
      </Head>
      <h1>Members</h1>
      {members?.members.map((member) => (
        <div key={member.githubId}>
          <Link href={`/members/${member.githubId}`}>{member.githubId}</Link>
        </div>
      ))}
    </div>
  );
};

export default Members;
