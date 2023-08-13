import Head from 'next/head';
import { MemberList } from 'src/components/MemberList/MemberList';
import styles from './index.module.css';

const Members = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Members | INIAD.ts</title>
      </Head>
      <MemberList />
    </div>
  );
};

export default Members;
