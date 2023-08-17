import type { MemberList } from 'commonTypesWithClient/models';
import Head from 'next/head';
import { MemberList } from 'src/components/MemberList/MemberList';
import styles from './index.module.css';

const Members = () => {
  const [members, setMembers] = useState<MemberList>();
  const fetchMemberList = async () => {
    const memberList = await apiClientS3.members.membersList_json.$get();
    setMembers(memberList);
  };

  useEffect(() => {
    const IntervalId = setInterval(() => fetchMemberList(), 1000);
    return () => clearInterval(IntervalId);
  }, []);

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
