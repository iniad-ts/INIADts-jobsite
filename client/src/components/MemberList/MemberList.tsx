import type { MemberListModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import MemberInfo from '../MemberInfo/MemberInfo';
import styles from './MemberList.module.css';

type MemberListProps = {
  members: MemberListModel;
};

export const MemberList = ({ members }: MemberListProps) => {
  //あとから顔写真やアイコンを表示するための仮丸
  const iconCircle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    marginRight: '10px',
  };

  return (
    <div>
      <h1 className={styles.h1}>
        <span className={styles.blue}>const</span> <span className={styles.name}>Members</span> ={' '}
        <span className={styles['bracket-1']}>()</span> <span className={styles.blue}>=&gt;</span>{' '}
        <span className={styles['bracket-1']}>{'{'}</span>
      </h1>
      {members?.members.map((member) => (
        <div key={member.githubId} className={styles.body}>
          <div style={iconCircle} />
          <div className={styles.box}>
            <MemberInfo name="name" value={member.userName} />
            <MemberInfo name="graduateYear" value={member.graduateYear} />
            <Link href={`/members/${member.githubId}`}>
              <MemberInfo name="links" value={`/member/${member.userName}`} />
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
