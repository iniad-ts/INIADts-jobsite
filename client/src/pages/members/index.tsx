import Link from '@docusaurus/Link';
import { members } from '@site/src/data/members';
import Layout from '@theme/Layout';
import React, { useCallback, useMemo } from 'react';
import MemberCard from '../../components/MemberCard/MemberCard';
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

  const computeGrade = useCallback((graduateYear: number) => {
    const isBetweenJanAndMar = new Date().getMonth() + 1 <= 3;
    const currentYear = new Date().getFullYear();
    const currentGrade = 5 + currentYear - graduateYear - (isBetweenJanAndMar ? 1 : 0);
    return currentGrade;
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
                  <a href={`#${grade.grade}`}>{computeGrade(grade.grade)}年生</a>
                </h2>
                <ul className={styles.memberList}>
                  {grade.members.map((member, i) => (
                    <li key={`${member.userName}-${i}`} className={styles.member}>
                      <Link to={`/members/${member.userName}`}>
                        <MemberCard member={member} count={i} />
                      </Link>
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
