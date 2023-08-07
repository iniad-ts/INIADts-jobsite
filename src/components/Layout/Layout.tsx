import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { RowNumber } from '../RowNunber/RowNumber';
import { SideBar } from '../SideBar/SideBar';
import styles from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Header />
      <SideBar array={[]} />
      <RowNumber array={['1', '1', '1', '1', '1']} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
