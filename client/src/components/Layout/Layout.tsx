import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const side = {
    directoryName: 'INIAD.ts-job-site',
    body: [
      { directoryName: 'welcome', body: ['README.md'] },
      {
        directoryName: 'members',
        body: [
          { directoryName: '24graduates', body: ['aaa', 'iii'] },
          {
            directoryName: '25graduates',
            body: [
              'uuu',
              {
                directoryName: 'part-time-job',
                body: ['eee', 'ooo'],
              },
              {
                directoryName: 'intern',
                body: ['kkk', 'sss'],
              },
              {
                directoryName: 'job-hunting',
                body: ['ttt', 'nnn'],
              },
            ],
          },
        ],
      },
      {
        directoryName: 'contact',
        body: ['hhh'],
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Header />
      <SideBar inSide={side} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
