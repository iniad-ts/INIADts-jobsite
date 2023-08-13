import type { MemberModel } from 'commonTypesWithClient/models';
import { useState } from 'react';
import styles from './index.module.css';

const AdminProfile = () => {
  const [member, setmember] = useState<MemberModel>();
  return (
    <div className={styles.container}>
      <div className={styles.serchTable}>
        <button>検索</button>
        <input id="idForm" type="text" name="idForm" placeholder="githubIdを入力してください" />
      </div>
    </div>
  );
};

export default AdminProfile;
