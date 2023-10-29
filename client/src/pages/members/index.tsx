import Link from '@docusaurus/Link';
import MemberCard from '@site/src/components/MemberCard/MemberCard';
import { members } from '@site/src/data/members';
import Layout from '@theme/Layout';
import React, { useCallback, useMemo, useState } from 'react';
import type { Member } from '../../../src/types/type';
import styles from './index.module.css';

type SortBy = 'grade-asc' | 'grade-desc' | 'findy-asc' | 'findy-desc';

const sortingText: Record<SortBy, string> = {
  'grade-asc': '学年昇順',
  'grade-desc': '学年降順',
  'findy-asc': 'スキル偏差値昇順',
  'findy-desc': 'スキル偏差値降順',
};

type Grade = {
  grade: number;
  members: Member[];
};

type MemberList = Member[] | Grade[];

const Members = () => {
  const [sortBy, setSortBy] = useState<SortBy>('grade-asc');

  const memberList = useMemo<MemberList>(() => {
    const gradeList = Array.from(new Set(members.map((member) => member.graduateYear))).sort(
      (a, b) => (sortBy === 'grade-asc' ? b - a : a - b)
    );

    switch (sortBy) {
      case 'grade-asc':
      case 'grade-desc':
        return gradeList.map((grade) => ({
          grade,
          members: members.filter((member) => member.graduateYear === grade),
        }));
      case 'findy-asc':
        return members.sort((a, b) => (b.findy ?? 0) - (a.findy ?? 0));
      case 'findy-desc':
        return members.sort((a, b) => (a.findy ?? 0) - (b.findy ?? 0));
    }
  }, [sortBy]);

  const computeGrade = useCallback((graduateYear: number) => {
    const isBetweenJanAndMar = new Date().getMonth() + 1 <= 3;
    const currentYear = new Date().getFullYear();
    const currentGrade = 5 + currentYear - graduateYear - (isBetweenJanAndMar ? 1 : 0);
    return currentGrade;
  }, []);

  const handleSortSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortBy);
  }, []);

  return (
    <Layout title="Members">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            メンバー
            <p>Members</p>
          </h1>
          <div className={styles.select}>
            <select onChange={handleSortSelect}>
              {Object.entries(sortingText).map(([key, value]) => (
                <option
                  key={key}
                  value={key}
                  selected={key === sortBy}
                  onClick={() => setSortBy(key as SortBy)}
                >
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <main className={styles.main}>
          {'grade' in memberList[0] ? (
            <ul className={styles.members}>
              {(memberList as Grade[]).map((grade) => (
                <li key={grade?.grade} className={styles.grade}>
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
          ) : (
            <ul className={`${styles.memberList} ${styles.members}`}>
              {(memberList as Member[]).map((member, i) => (
                <li key={`${member.userName}-${i}`} className={styles.member}>
                  <Link to={`/members/${member.userName}`}>
                    <MemberCard member={member} count={i} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Members;
