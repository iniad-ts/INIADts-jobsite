import type { MemberModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';

const Members = () => {
  const [members, setMembers] = useState<MemberModel[]>([]);
  const fetchMemberList = async () => {
    const memberList = await apiClient.members.$get();
    setMembers(memberList);
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
      {members.map((member) => (
        <div key={member.githubId}>
          <Link href={`/members/${member.githubId}`}>{member.displayName}</Link>
        </div>
      ))}
    </div>
  );
};

export default Members;
