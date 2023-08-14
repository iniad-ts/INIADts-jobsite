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
        githubId: 'user123',
        userName: 'user_name_123',
        realName: '真田 太郎',
        displayName: 'Sanada Taro',
        avatarUrl: 'https://example.com/avatar/user123.png',
        graduateYear: 2023,
        introduction: '初めまして、真田太郎です。開発が好きです。',
        products: [
          {
            title: 'Amazing Project',
            description: 'This is an amazing project with lots of features.',
            url: 'https://example.com/amazing-project',
          },
          {
            title: 'Next Great App',
            description: 'The next great app solving real-world problems.',
            url: 'https://example.com/next-great-app',
          },
        ],
        socialLinks: ['https://twitter.com/user123', 'https://github.com/user123'],
        updateAt: 1628820972000,
      },
      {
        githubId: 'user456',
        userName: 'user_name_456',
        realName: '山本 花子',
        displayName: 'Yamamoto Hanako',
        graduateYear: 2022,
        introduction: 'デザインとコーディングが得意な山本花子です。',
        updateAt: 1628820972000,
      },
    ]);
  }, []);
  return (
    <div>
      <h1 className={styles.h1}>
        <span className={styles.blue}>const</span> <span className={styles.name}>Members</span> ={' '}
        <span className={styles['bracket-1']}>()</span> <span className={styles.blue}>=&gt;</span>{' '}
        <span className={styles['bracket-1']}>{'{'}</span>
      </h1>
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
      <h1 className={styles.h1}>
        <span className={styles['bracket-1']}>{'}'}</span>
        {';'}
      </h1>
    </div>
  );
};
