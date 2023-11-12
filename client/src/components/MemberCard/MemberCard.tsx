import type { Member } from '@site/src/types/type';
import { useMemo } from 'react';
import styles from './MemberCard.module.css';

type Props = {
  member: Member;
  count?: number;
};

const MemberCard = ({ member, count }: Props) => {
  const image = useMemo(() => {
    if (member.avatarUrl !== undefined) {
      return member.avatarUrl;
    } else {
      return `https://avatars.githubusercontent.com/${member.userName}`;
    }
  }, [member.avatarUrl, member.userName]);

  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.avatar}>
          <img src={image} alt={`${member.userName}'s avatar`} />
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{member.displayName}</h4>
          <p className={styles.username}>@{member.userName}</p>
          <p className={styles.findy}>
            スキル偏差値<span>{member.findy}</span>
          </p>
        </div>
        <div className={styles.text}>{member.introduction}</div>
        <div className={styles.status}>
          {member.status !== undefined &&
            member.status.map((status) => <div key={status}>{status}</div>)}
        </div>
        {count !== undefined && <div className={styles.count}>#{count + 1}</div>}
      </div>
    </div>
  );
};

export default MemberCard;
