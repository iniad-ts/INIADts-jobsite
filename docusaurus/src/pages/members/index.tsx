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
    return gradeSet.sort((a, b) => b - a);
  }, [members]);

  const membersInGrade = (grade: number) =>
    members?.members.filter((member) => member.graduateYear === grade);

  const MemberInfo = (member: MemberListModel['members'][0]) => (
    <div key={member.githubId} className={styles.member}>
      <div>id: {member.githubId}</div>
      <div>name: {member.userName}</div>
    </div>
  );

  return (
    <Layout title="Members">
      <div>
        <h1 className={styles.title}>Members</h1>
        <main className={styles.main}>
          {gradeList.map((grade) => (
            <div key={grade} className={styles.grade}>
              <h3>{grade}卒</h3>
              <div>
                {membersInGrade(grade)?.map((member) => (
                  <MemberInfo {...member} key={member.githubId} />
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
