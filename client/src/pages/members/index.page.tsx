import type { MemberListModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MemberList } from 'src/components/MemberList/MemberList';
import styles from './index.module.css';

const Members = () => {
  const [members, setMembers] = useState<MemberListModel>();
  // const fetchMemberList = async () => {
  //   const memberList = await apiClientS3.members.membersList_json.$get();
  //   setMembers(memberList);
  // };

  // useEffect(() => {
  //   const IntervalId = setInterval(() => fetchMemberList(), 5000);
  //   return () => clearInterval(IntervalId);
  // }, []);

  //デモ用の仮データ
  useEffect(() => {
    setMembers({
      members: [
        {
          githubId: 'user123',
          userName: 'User OneTwoThree',
          graduateYear: 2022,
        },
        {
          githubId: 'example456',
          userName: 'Example User',
          graduateYear: 2021,
        },
      ],
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Members | INIAD.ts</title>
      </Head>
      {members ? <MemberList members={members} /> : 'Loading...'}
    </div>
  );
};

export default Members;
