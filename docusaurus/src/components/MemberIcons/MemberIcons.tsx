import Link from '@docusaurus/Link';
import { members } from '@site/src/data/members';
import React from 'react';
import styles from './MemberIcons.module.css';

export const MemberIcons = () => {
  return (
    <div className={styles.container}>
      {members.map((member, i) => (
        <div key={i} className={styles.member}>
          <Link to={`members/${member.userName}`}>
            <img
              src={`https://avatars.githubusercontent.com/${member.userName}`}
              alt={`${member}'s image`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
