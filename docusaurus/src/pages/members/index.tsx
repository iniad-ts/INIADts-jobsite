import { s3Client } from '@site/src/utils/apiClient';
import Layout from '@theme/Layout';
import type { MemberListModel } from 'commonTypesWithClient/models';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.css';

const Members = () => {
  const [members, setMembers] = useState<MemberListModel>();

  const fetchMembers = async () => {
    const res = await s3Client.members.membersList_json.$get();
    setMembers(res);
  };

  useEffect(() => {
    const fetchIntervalId = setInterval(fetchMembers, 1000);
    return () => clearInterval(fetchIntervalId);
  }, []);

  const gradeList = useMemo(() => {
    if (!members) return [];

    const grades = members.members.map((member) => member.graduateYear);
    const gradeSet = grades.filter((grade, i) => grades.indexOf(grade) === i);

    return gradeSet
      .sort((a, b) => b - a)
      .map((grade) => {
        const gradeMembers = members?.members.filter((member) => member.graduateYear === grade);
        return { grade, members: gradeMembers };
      });
  }, [members]);

  return (
    <Layout title="Members">
      <div>
        <h1 className={styles.title}>Members</h1>
        <main className={styles.main}>
          {gradeList.map((grade) => (
            <div key={grade.grade} className={styles.grade}>
              <h2>{grade.grade}卒</h2>
              <div>
                {grade.members.map((member) => (
                  <div key={member.githubId} className={styles.member}>
                    <div>{member.githubId}</div>
                    <div>{member.userName}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Members;
