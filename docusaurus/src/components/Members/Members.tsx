import { members } from '@site/src/data/members';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Members.module.css';

export const Members = () => {
  return (
    <div className={styles.container}>
      {members.map((member, i) => (
        <div key={i} className={styles.member}>
          <Link to={`imokencomponent/${member.userName}`}>
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
