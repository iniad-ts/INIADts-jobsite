import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import type { DirectoryModel } from '../SideBar/SideBar';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const side: DirectoryModel = {
    directoryName: 'INIAD.ts-job-site',
    body: [
      { directoryName: 'welcome', body: [{ fileName: 'README.md' }] },
      {
        directoryName: 'members',
        body: [
          { directoryName: '24graduates', body: [{ fileName: 'aaa' }, { fileName: 'iii' }] },
          {
            directoryName: '25graduates',
            body: [
              { fileName: 'uuu' },
              {
                directoryName: 'part-time-job',
                body: [{ fileName: 'eee' }, { fileName: 'ooo' }],
              },
              {
                directoryName: 'intern',
                body: [{ fileName: 'kkk' }, { fileName: 'sss' }],
              },
              {
                directoryName: 'job-hunting',
                body: [{ fileName: 'ttt' }, { fileName: 'nnn' }],
              },
            ],
          },
        ],
      },
      {
        directoryName: 'contact',
        body: [{ fileName: 'yossuli', url: 'https://github.com/yossuli' }],
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
