import React, { useState } from 'react';
import styles from './Members.module.css';

export const Members = () => {
  const [members, setmembers] = useState([
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
    'jun-eg',
    'mst-mkt',
    'yossuli',
  ]);
  return (
    <div className={styles.container}>
      {members.map((member, i) => (
        <div key={i} className={styles.member}>
          <img src={`https://avatars.githubusercontent.com/${member}`} alt={`${member}'s image`} />
        </div>
      ))}
    </div>
  );
};
