import type { MemberModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const AdminMembers = () => {
  const [members, setmembers] = useState<MemberModel[]>([]);
  const fetchMenberList = async () => {
    const memberList = await apiClient.members.$get();
    setmembers(memberList);
  };

  useEffect(() => {
    fetchMenberList();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Addition・MemberList | INIAD.ts</title>
      </Head>
      <div className={styles.addTable}>
        <h1>#Member追加</h1>
      </div>
      <div className={styles.memberListContainer}>
        <h1>#Member一覧</h1>
        <div className={styles.memberTable}>
          {members.map((member) => (
            <div key={member.githubId}>
              <Link href={`/members/${member.githubId}`}>
                {member.githubId},{member.displayName},{member.avatarURL}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
