import type { MiniDirectoryModel } from 'src/utils/addDecoration';
import { addDecoration } from 'src/utils/addDecoration';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const side: MiniDirectoryModel = {
    type: 'dir',
    directoryName: 'INIAD.ts-job-site',
    body: [
      { type: 'dir', directoryName: 'welcome', body: [{ type: 'file', fileName: 'README.md' }] },
      {
        type: 'dir',
        directoryName: 'members',
        body: [
          {
            type: 'dir',
            directoryName: '24graduates',
            body: [
              { type: 'file', fileName: 'aaa' },
              { type: 'file', fileName: 'iii' },
            ],
          },
          {
            type: 'dir',
            directoryName: '25graduates',
            body: [
              { type: 'file', fileName: 'uuu' },
              {
                type: 'dir',
                directoryName: 'part-time-job',
                body: [
                  { type: 'file', fileName: 'eee' },
                  { type: 'file', fileName: 'ooo' },
                ],
              },
              {
                type: 'dir',
                directoryName: 'intern',
                body: [
                  { type: 'file', fileName: 'kkk' },
                  { type: 'file', fileName: 'sss' },
                ],
              },
              {
                type: 'dir',
                directoryName: 'job-hunting',
                body: [
                  { type: 'file', fileName: 'ttt' },
                  { type: 'file', fileName: 'nnn' },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'dir',
        directoryName: 'contact',
        body: [{ type: 'file', fileName: 'yossuli', url: 'https://github.com/yossuli' }],
      },
    ],
    isDisplay: true,
  };
  return (
    <div className={styles.container}>
      <Header />
      <SideBar inSide={addDecoration(side)} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
