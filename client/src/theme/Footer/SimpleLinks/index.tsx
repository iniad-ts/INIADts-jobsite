import type { Props } from '@theme/Footer/Links/Simple';
import React from 'react';
import LinkItem from '../LinkItem';
import styles from '../index.module.css';

const SimpleLinks = ({ links }: Props) => {
  return (
    <ul className={styles.linkList}>
      {links.map((linkItem, i) => (
        <li key={i}>
          <LinkItem item={linkItem} />
        </li>
      ))}
    </ul>
  );
};

export default SimpleLinks;
