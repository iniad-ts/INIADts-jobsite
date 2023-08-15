import type { MemberModel } from 'commonTypesWithClient/models';
import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import InputField from './InputField';

type Product = {
  title: string;
  description: string;
  url: string;
};

const MemberForm = () => {
  const [member, setMember] = useState<MemberModel>({
    githubId: '',
    userName: '',
    realName: '',
    displayName: '',
    graduateYear: new Date().getFullYear(),
    updateAt: Date.now(),
    introduction: '',
    products: [],
    socialLinks: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // textareaの高さをリセット
    e.target.style.height = 'inherit';

    // 新しい高さを計算して設定
    const newHeight = e.target.scrollHeight;
    e.target.style.height = `${newHeight}px`;

    setMember((prev) => ({ ...prev, [name]: value }));
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

  return (
    <div className={styles.container}>
      <h2>Edit Profile</h2>

      <InputField
        label="Github ID"
        name="githubId"
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="User Name"
        name="userName"
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Real Name"
        name="realName"
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Display Name"
        name="displayName"
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Graduate Year"
        name="graduateYear"
        type="number"
        onChange={handleInputChange}
        className={styles.input}
      />
      <InputField
        label="Introduction"
        name="introduction"
        type="textarea"
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
            className={styles.input}
            onChange={(e) => handleProductChange(index, 'title', e.target.value)}
          />
          <InputField
            label="Description"
            type="textarea"
            className={styles.input}
            onChange={(e) => handleProductChange(index, 'description', e.target.value)}
          />
          <InputField label="URL" className={styles.input} onChange={handleInputChange} />
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
          //TODO 送信処理に変更
          onClick={() => console.log(member)}
        >
          決定
        </button>
      </div>
    </div>
  );
};

export default MemberForm;
