import Head from 'next/head';
import { MemberList } from 'src/components/MemberList/MemberList';
import styles from './index.module.css';

const Members = () => {
  // const [members, setMembers] = useState<MemberModel[]>([]);
  // const fetchMemberList = async () => {
  //   const memberList = await apiClient.members.$get();
  //   setMembers(memberList);
  // };

  // useEffect(() => {
  //   const IntervalId = setInterval(() => fetchMemberList(), 1000);
  //   return () => clearInterval(IntervalId);
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Members | INIAD.ts</title>
      </Head>
      <MemberList />
    </div>
  );
};

export default Members;
