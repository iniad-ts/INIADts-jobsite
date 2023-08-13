import Head from 'next/head';
import { Contact } from 'src/components/Contact/Contact';
import styles from './index.module.css';

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact | INIAD.ts</title>
      </Head>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Contacts;
