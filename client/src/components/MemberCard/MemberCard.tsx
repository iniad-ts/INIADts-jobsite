import Link from '@docusaurus/Link';
import type { Member } from '@site/src/types/type';
import React, { useMemo } from 'react';
import styles from './MemberCard.module.css';

const MemberCard = ({ member }: { member: Member }) => {
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
        <div className={styles.text}>
          <h4 className={styles.name}>{member.displayName}</h4>
          <p className={styles.username}>@{member.userName}</p>
          <Link className={styles.button} to={`members/${member.userName}`}>
            詳しく見る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
