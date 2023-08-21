import type { MemberModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import Input from 'src/components/Input/Input';
import { Products } from 'src/components/Products/Products';
import { SocialLinks } from 'src/components/SocialLinks/SocialLinks';
import TextArea from 'src/components/Textarea/Textarea';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const AdminProfile = () => {
  const [user] = useAtom(userAtom);
  const [member, setMember] = useState<MemberModel>({
    githubId: '',
    userName: '',
    realName: '',
    displayName: '',
    graduateYear: 2025,
    updateAt: Date.now(),
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setMember((prev) => ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
    updateMember();
  };

  const changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
    updateMember();
  };

  const updateMember = async () => {
    if (user === null) return;
    await apiClient.members.$post({ body: member });
  };

  const fetchMember = useCallback(async () => {
    if (user !== null) {
      const res = await apiClient.members._memberId(user.githubId).$get();
      if (res !== null) {
        setMember(res);
        return;
      }
      alert('Member情報がありません');
    }
  }, [user]);

  useEffect(() => {
    fetchMember();
  }, [fetchMember, user]);

  if (member === undefined) {
    return <div>ユーザー情報の取得に失敗しました</div>;
  }

  const inputs = [
    { label: 'ユーザー名', name: 'userName', placeholder: 'mst-mkt' },
    { label: '本名', name: 'realName', placeholder: '田中太郎' },
    { label: '表示名', name: 'displayName', placeholder: '🧶' },
    { label: '卒業年', name: 'graduateYear', type: 'number', placeholder: '2027' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Edit Profile | INIAD.ts</title>
      </Head>
      <h2 className={styles.title}># Edit Profile</h2>
      <div>
        {inputs.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            name={input.name}
            value={member[input.name as keyof MemberModel] as string | number | undefined}
            onChange={changeInput}
            placeholder={input.placeholder}
            type={input.type}
          />
        ))}
        <TextArea
          label="自己紹介"
          name="introduction"
          onChange={changeTextArea}
          placeholder="ex: こんにちは"
        />
        <Products member={member} setMember={setMember} />
        <SocialLinks member={member} setMember={setMember} />
      </div>
    </div>
  );
};

export default AdminProfile;
