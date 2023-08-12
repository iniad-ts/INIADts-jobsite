import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const Members = () => {
  const [memberList, setMemberList] = useState<string[]>([]);
  const fetchMemberList = async () => {
    const memberList = await apiClient.member.list.$get();
    setMemberList(memberList);
  };

  useEffect(() => {
    const IntervalId = setInterval(() => fetchMemberList(), 1000);
    return () => clearInterval(IntervalId);
  }, []);

  return (
    <div>
      <Head>
        <title>Members | INIAD.ts</title>
      </Head>
      <h1>Members</h1>
      {memberList.map((member) => (
        <div key={member}>
          <Link href={`/members/${member}`}>{member}</Link>
        </div>
      ))}
    </div>
  );
};

export default Members;
