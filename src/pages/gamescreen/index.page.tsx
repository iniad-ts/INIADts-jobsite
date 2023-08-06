import { useAtom } from 'jotai';
import { userAtom } from 'src/atoms/user';
import { Loading } from 'src/components/Loading/Loading';
import App from 'src/konva/konva';

const Home = () => {
  const [user] = useAtom(userAtom);
  if (!user) return <Loading visible />;

  return (
    <>
      {/* <div className={styles.container}>
        {/* 下記は簡易的に作ったモノです。削除してもらってかまいません */}
      {/* <h1 className={styles.word}>ここはgamescreenです</h1> */}
      <App />
      {/* </div> */}
    </>
  );
};

export default Home;
