import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const getPageTitle = () => {
      const pageTitle = document.title;
      setTitle(pageTitle);
    };
    router.events.on('routeChangeComplete', getPageTitle);
    return () => {
      router.events.off('routeChangeComplete', getPageTitle);
    };
  });

  return (
    <div className={styles.container}>
      <Header title={title} />
      <SideBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
