import Head from 'next/head';
import { Contact } from 'src/components/Contact/Contact';

const Contacts = () => {
  return (
    <div>
      <Head>
        <title>Contact | INIAD.ts</title>
      </Head>
      <Contact />
    </div>
  );
};

export default Contacts;
