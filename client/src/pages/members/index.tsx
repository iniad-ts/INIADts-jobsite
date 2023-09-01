import { members } from '@site/src/data/members';
import Layout from '@theme/Layout';
import React, { useMemo } from 'react';
import styles from './index.module.css';

const Members = () => {
  const memberList = useMemo(() => {
    const gradeList = Array.from(new Set(members.map((member) => member.graduateYear))).sort(
      (a, b) => b - a
    );

    const memberList = gradeList.map((grade) => {
      const gradeMembers = members.filter((member) => member.graduateYear === grade);
      return {
        grade,
        members: gradeMembers,
      };
    });

    return memberList;
  }, []);

  return (
    <Layout title="Members">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>メンバー一覧</h1>
          <p>Members</p>
        </div>
        <main className={styles.main}>
          <ul className={styles.members}>
            {memberList.map((grade) => (
              <li key={grade.grade} className={styles.grade}>
                <h2 id={`${grade.grade}`}>
                  <a href={`#${grade.grade}`}>{2028 - grade.grade}年生</a>
                </h2>
                <ul className={styles.memberList}>
                  {grade.members.map((member) => (
                    <li key={member.userName} className={styles.member}>
                      <p>ここは @imoken777 がコンポーネント化</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </Layout>
  );
};

export default Members;
