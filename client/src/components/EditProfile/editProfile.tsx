import type { MemberModel } from 'commonTypesWithClient/models';
import React, { useState } from 'react';
import styles from './EditProfile.module.css';

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
      <label>
        Github ID:
        <input
          className={styles.input}
          type="text"
          name="githubId"
          value={member.githubId}
          onChange={handleInputChange}
        />
      </label>
      <label>
        User Name:
        <input
          className={styles.input}
          type="text"
          name="userName"
          value={member.userName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Real Name:
        <input
          className={styles.input}
          type="text"
          name="realName"
          value={member.realName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Display Name:
        <input
          className={styles.input}
          type="text"
          name="displayName"
          value={member.displayName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Graduate Year:
        <input
          className={styles.input}
          type="number"
          name="graduateYear"
          value={member.graduateYear}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Introduction:
        <textarea
          name="introduction"
          value={member.introduction}
          onChange={handleInputChange}
          className={styles.input}
        />
      </label>
      <h3>Products</h3>
      <button className={styles.button} onClick={addProduct}>
        追加
      </button>
      {member.products?.map((product, index) => (
        <div key={index}>
          <label>
            Title:
            <input
              className={styles.input}
              type="text"
              value={product.title}
              onChange={(e) => handleProductChange(index, 'title', e.target.value)}
            />
          </label>
          <label>
            Description:
            <textarea
              className={styles.input}
              value={product.description}
              onChange={(e) => handleProductChange(index, 'description', e.target.value)}
            />
          </label>
          <label>
            URL:
            <input
              className={styles.input}
              type="text"
              value={product.url}
              onChange={(e) => handleProductChange(index, 'url', e.target.value)}
            />
          </label>
          <button onClick={() => removeProduct(index)} className={styles.button}>
            Remove
          </button>
        </div>
      ))}
      <h3>Social Links</h3>
      <button className={styles.button} onClick={addSocialLink}>
        追加
      </button>
      {(member.socialLinks || []).map((link, index) => (
        <div key={index}>
          <label>
            Link:
            <input
              className={styles.input}
              type="text"
              value={link}
              onChange={(e) => handleSocialLinkChange(index, e.target.value)}
            />
          </label>
          <button onClick={() => removeSocialLink(index)} className={styles.button}>
            Remove
          </button>
        </div>
      ))}
      <div>
        <button className={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default MemberForm;
