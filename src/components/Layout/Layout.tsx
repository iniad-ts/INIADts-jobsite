import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const side = {
    directoryName: 'sideBar',
    body: [
      { directoryName: 'home', body: ['home'] },
      {
        directoryName: 'member',
        body: [
          { directoryName: '24', body: ['aaa', 'iii'] },
          { directoryName: '25', body: ['uuu', 'eee'] },
        ],
      },
      {
        directoryName: 'contact',
        body: [
          {
            directoryName: 'sideBar',
            body: [
              { directoryName: 'home', body: ['home'] },
              {
                directoryName: 'member',
                body: [
                  { directoryName: '24', body: ['aaa', 'iii'] },
                  {
                    directoryName: '25',
                    body: [
                      'uuu',
                      {
                        directoryName: 'sideBar',
                        body: [
                          { directoryName: 'home', body: ['home'] },
                          {
                            directoryName: 'member',
                            body: [
                              { directoryName: '24', body: ['aaa', 'iii'] },
                              { directoryName: '25', body: ['uuu', 'eee'] },
                            ],
                          },
                          { directoryName: 'contact', body: ['contact'] },
                        ],
                      },
                    ],
                  },
                ],
              },
              { directoryName: 'contact', body: ['contact'] },
            ],
          },
        ],
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
