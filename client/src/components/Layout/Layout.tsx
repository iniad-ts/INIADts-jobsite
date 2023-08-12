import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { SideBar } from '../SideBar/SideBar';
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');

  const getPageTitle = useCallback(() => {
    const pageTitle = document.title;
    setTitle(pageTitle);
  }, []);

  useEffect(() => {
    const titleElement = document.querySelector('title');
    if (titleElement === null) return;

    titleElement.addEventListener('DOMSubtreeModified', getPageTitle);

    return () => titleElement.removeEventListener('DOMSubtreeModified', getPageTitle);
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
