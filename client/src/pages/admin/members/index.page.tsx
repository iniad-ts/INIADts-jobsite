import type { MemberModel } from 'commonTypesWithClient/models';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Input from 'src/components/Input/Input';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const AdminMembers = () => {
  const [members, setMembers] = useState<MemberModel[]>([]);
  const [memberInfo, setMemberInfo] = useState({
    githubId: '',
    userName: '',
    realName: '',
    displayName: '',
    graduateYear: 2025,
  });

  const fetchMemberList = async () => {
    const memberList = await apiClient.members.$get();
    setMembers(memberList);
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setMemberInfo((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const addMember = async () => {
    const newMember = await apiClient.members.$post({
      body: {
        githubId: memberInfo.githubId,
        userName: memberInfo.userName,
        realName: memberInfo.realName,
        displayName: memberInfo.displayName,
        graduateYear: memberInfo.graduateYear as number,
        avatarUrl: `https://github.com/${memberInfo.userName}.png`,
        updateAt: Date.now(),
      },
    });

    if (newMember === null) {
      alert('Memberの追加に失敗しました');
      return;
    }

    fetchMemberList();
    setMemberInfo({
      githubId: '',
      userName: '',
      realName: '',
      displayName: '',
      graduateYear: 2025,
    });
  };

  useEffect(() => {
    fetchMemberList();
    const fetchIntervalId = setInterval(fetchMemberList, 1000);
    return () => clearInterval(fetchIntervalId);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Addition・MemberList | INIAD.ts</title>
      </Head>
      <div className={styles.section}>
        <h1 className={styles.title}>#Member追加</h1>
        <Input
          label="GitHubID"
          name="githubId"
          placeholder="ex: 012345678"
          onChange={changeInput}
        />
        <Input
          label="GitHubユーザー名"
          name="userName"
          placeholder="ex: mst-mkt"
          onChange={changeInput}
        />
        <Input label="表示名" name="displayName" placeholder="ex: 🧶" onChange={changeInput} />
        <Input label="本名" name="realName" placeholder="ex: 田中 太郎" onChange={changeInput} />
        <Input
          label="卒業年"
          type="number"
          name="graduateYear"
          placeholder="ex: 2025"
          onChange={changeInput}
        />
        <button onClick={addMember}>追加</button>
      </div>
      <div className={styles.section}>
        <h1 className={styles.title}>#Member一覧</h1>
        <div>
          {members.map((member) => (
            <div key={member.githubId}>
              <Link href={`/members/${member.githubId}`}>{member.displayName}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMembers;
