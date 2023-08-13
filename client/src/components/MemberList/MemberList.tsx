import type { MemberModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MemberInfo from '../MemberInfo/MemberInfo';
import styles from './MemberList.module.css';

export const MemberList = () => {
  const [members, setMembers] = useState<MemberModel[]>([]);
  // const fetchMemberList = async () => {
  //   const memberList = await apiClient.members.$get();
  //   setMembers(memberList);
  // };

  //あとから顔写真やアイコンを表示するための仮丸
  const iconCircle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    marginRight: '10px',
  };

  useEffect(() => {
    setMembers([
      {
        githubId: 'gitUser1',
        displayName: 'User One',
        graduateYear: 2023,
        introduction: 'こんにちは、User Oneです。',
      },
      {
        githubId: 'gitUser2',
        displayName: 'User Two',
        graduateYear: 2022,
        introduction: 'User Twoといいます。',
      },
      {
        githubId: 'gitUser3',
        displayName: 'User Three',
        graduateYear: 2021,
      },
    ]);
  }, []);
  return (
    <div>
      <h1 className={styles.h1}>const Members = () =&gt; {'{'}</h1>
      {members.map((member) => (
        <div key={member.githubId} className={styles.body}>
          <div style={iconCircle} />
          <div className={styles.box}>
            <MemberInfo name="name" value={member.displayName} />
            <MemberInfo name="graduateYear" value={member.graduateYear} />
            <Link href={`/members/${member.githubId}`}>
              <MemberInfo name="links" value={`/member/${member.displayName}`} />
            </Link>
          </div>
        </div>
      ))}
      <h1 className={styles.h1}>{'};'}</h1>
    </div>
  );
};
