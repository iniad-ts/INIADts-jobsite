import type { MemberModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import Input from 'src/components/Input/Input';
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

  const changeProduct = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;
    setMember((prev) => ({
      ...prev,
      products: prev.products?.map((product, j) =>
        i === j ? { ...product, [name]: value } : product
      ),
    }));
    updateMember();
  };

  const changeSocialLink = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { name, value } = e.target;
    setMember((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks?.map((socialLink, j) => (i === j ? value : socialLink)),
    }));
    updateMember();
  };

  const addProduct = () => {
    setMember((prev) => ({
      ...prev,
      products: [...(prev.products ?? []), { title: '', description: '', url: '' }],
    }));
  };

  const removeProduct = (i: number) => {
    setMember((prev) => ({
      ...prev,
      products: prev.products?.filter((_, j) => i !== j),
    }));
  };

  const addSocialLink = () => {
    setMember((prev) => ({
      ...prev,
      socialLinks: [...(prev.socialLinks ?? []), ''],
    }));
  };

  const removeSocialLink = (i: number) => {
    setMember((prev) => ({
      ...prev,
      socialLinks: prev.socialLinks?.filter((_, j) => i !== j),
    }));
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Edit Profile | INIAD.ts</title>
      </Head>
      <h2 className={styles.title}># Edit Profile</h2>
      <div>
        <Input
          label="User Name"
          name="userName"
          value={member.userName}
          onChange={changeInput}
          placeholder="ex: mst-mkt"
        />
        <Input
          label="Real Name"
          name="realName"
          value={member.realName}
          onChange={changeInput}
          placeholder="ex: 田中太郎"
        />
        <Input
          label="Display Name"
          name="displayName"
          value={member.displayName}
          onChange={changeInput}
          placeholder="ex: 🧶"
        />
        <Input
          label="Graduate Year"
          name="graduateYear"
          type="number"
          value={member.graduateYear}
          onChange={changeInput}
          placeholder="ex: 2027"
        />
        <TextArea
          label="Introduction"
          name="introduction"
          onChange={changeTextArea}
          placeholder="ex: こんにちは"
        />
        <div>
          {member.products?.map((product, i) => (
            <div key={`product-${i}`}>
              <Input
                label="Product Name"
                name="title"
                value={product.title}
                onChange={(e) => changeProduct(e, i)}
                placeholder="ex: Gradius"
              />
              <Input
                label="Product Description"
                name="description"
                value={product.description}
                onChange={(e) => changeProduct(e, i)}
                placeholder="ex: シューティングゲーム"
              />
              <Input
                label="Product URL"
                name="url"
                value={product.url}
                onChange={(e) => changeProduct(e, i)}
                placeholder="ex: https://example.com"
              />
            </div>
          ))}
          <button onClick={addProduct}>追加</button>
        </div>
        <div>
          {member.socialLinks?.map((socialLink, i) => (
            <div key={`socialLink-${i}`}>
              <Input
                label="Social Link URL"
                name="url"
                value={socialLink}
                onChange={(e) => changeProduct(e, i)}
                placeholder="ex: https://twitter.com/"
              />
            </div>
          ))}
          <button onClick={addSocialLink}>追加</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
