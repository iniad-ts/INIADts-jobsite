import type { MemberModel } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './EditProfile.module.css';
import InputField from './InputField';

type Product = {
  title: string;
  description: string;
  url: string;
};

const MemberForm = () => {
  const [user] = useAtom(userAtom);
  const [member, setMember] = useState<MemberModel>({
    githubId: '',
    userName: '',
    realName: '',
    displayName: '',
    graduateYear: 0,
    updateAt: Date.now(),
    introduction: '',
    products: [],
    socialLinks: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newHeight = e.target.scrollHeight;
    e.target.style.height = `${newHeight}px`;
    setMember((prev) => ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
  };

  const handleProductChange = (index: number, key: keyof Product, value: string) => {
    const newProducts = [...(member.products || [])];
    newProducts[index][key] = value;
    setMember((prev) => ({ ...prev, products: newProducts }));
  };

  const handleSocialLinkChange = (index: number, value: string) => {
    const newLinks = [...(member.socialLinks || [])];
    newLinks[index] = value;
    setMember((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const addProduct = () => {
    setMember((prev) => ({
      ...prev,
      products: [...(prev.products || []), { title: '', description: '', url: '' }],
    }));
  };

  const addSocialLink = () => {
    setMember((prev) => ({
      ...prev,
      socialLinks: [...(prev.socialLinks || []), ''],
    }));
  };

  const removeProduct = (index: number) => {
    const newProducts = [...(member.products || [])];
    newProducts.splice(index, 1);
    setMember((prev) => ({ ...prev, products: newProducts }));
  };

  const removeSocialLink = (index: number) => {
    const newLinks = [...(member.socialLinks || [])];
    newLinks.splice(index, 1);
    setMember((prev) => ({ ...prev, socialLinks: newLinks }));
  };

  const fetchProfile = async () => {
    const res = await apiClient.members._memberId(member.githubId).$get();
    if (res === null) {
      alert('プロフィールの取得に失敗しました');
      return;
    }
    setMember(res);
  };

  const saveProfile = async () => {
    console.log(member);
    const res = await apiClient.members.$post({ body: member });
    if (res === null) {
      alert('保存に失敗しました');
    }
    alert('保存しました');
  };

  useEffect(() => {
    if (user?.githubId !== undefined) {
      setMember((prev) => ({ ...prev, githubId: user.githubId }));
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>
      <InputField
        label="User Name"
        name="userName"
        value={member.userName}
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Real Name"
        name="realName"
        value={member.realName}
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Display Name"
        name="displayName"
        value={member.displayName}
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Graduate Year"
        name="graduateYear"
        type="number"
        value={member.graduateYear}
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Introduction"
        name="introduction"
        type="textarea"
        value={member.introduction}
        onChange={handleInputChange}
        className={styles.input}
      />
      <h3>Products</h3>
      <button className={styles.button} onClick={addProduct}>
        追加
      </button>
      {member.products?.map((product, index) => (
        <div key={index} className={styles.productInfo}>
          <InputField
            label="Title"
            name="title"
            value={product.title}
            className={styles.input}
            onChange={(e) => handleProductChange(index, 'title', e.target.value)}
          />
          <InputField
            label="Description"
            type="textarea"
            className={styles.input}
            value={product.description}
            onChange={(e) => handleProductChange(index, 'description', e.target.value)}
          />
          <InputField
            label="URL"
            className={styles.input}
            onChange={handleInputChange}
            value={product.url}
          />
          <button onClick={() => removeProduct(index)} className={styles.button}>
            削除
          </button>
        </div>
      ))}
      <h3>Social Links</h3>
      <button className={styles.button} onClick={addSocialLink}>
        追加
      </button>
      {(member.socialLinks || []).map((link, index) => (
        <div key={index}>
          <InputField
            label="Link"
            className={styles.input}
            value={link}
            onChange={(e) => handleSocialLinkChange(index, e.target.value)}
          />
          <button onClick={() => removeSocialLink(index)} className={styles.button}>
            削除
          </button>
        </div>
      ))}
      <div>
        <button
          className={`
          ${styles.button}
          ${styles.buttonSubmit}
        `}
          onClick={saveProfile}
        >
          決定
        </button>
      </div>
    </div>
  );
};
export default MemberForm;
