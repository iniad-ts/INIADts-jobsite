import { useAtom } from 'jotai';
import { Loading } from 'src/components/Loading/Loading';
import { WelcomePage } from 'src/components/WelcomePage/WelcomPage';
import { userAtom } from '../atoms/user';

const Home = () => {
  const [user] = useAtom(userAtom);

  if (!user) return <Loading visible />;

  return (
    <>
      <WelcomePage />
    </>
  );
};

export default Home;
