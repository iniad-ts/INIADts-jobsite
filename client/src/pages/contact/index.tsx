import Layout from '@theme/Layout';
import React, { useMemo, useState } from 'react';
import styles from './index.module.css';

type contactInfo = {
  name: string;
  email: string;
  company?: string;
  category: string;
  message: string;
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState<contactInfo>({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const changeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value });

    e.target.style.height = 'auto';
    const scrollHeight = e.target.scrollHeight;
    const height = Math.min(Math.max(scrollHeight, 64), 200);
    e.target.style.height = `${height}px`;
  };

  const canSubmit = useMemo(() => {
    const term = [
      contactInfo.name !== '',
      contactInfo.email !== '',
      contactInfo.category !== '',
      contactInfo.message !== '',
      contactInfo.email.match(/.+@.+\..+/),
    ];
    return term.every(Boolean);
  }, [contactInfo]);

  return (
    <Layout title="Contact">
      <div className={styles.container}>
        <h1 className={styles.title}>お問い合わせ</h1>
        <main className={styles.main}>
          <div className={styles.section}>
            <label htmlFor="name" className={`${styles.label} ${styles.isRequired}`}>
              お名前
            </label>
            <input
              type="text"
              name="name"
              value={contactInfo.name}
              onChange={changeInput}
              className={styles.form}
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="email" className={`${styles.label} ${styles.isRequired}`}>
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={changeInput}
              className={styles.form}
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="company" className={styles.label}>
              会社・団体名
            </label>
            <input
              type="text"
              name="company"
              value={contactInfo.company}
              onChange={changeInput}
              className={styles.form}
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="category" className={`${styles.label} ${styles.isRequired}`}>
              カテゴリー
            </label>
            <select name="category" onChange={changeSelect} className={styles.form}>
              <option value="" hidden>
                --- 未選択 ---
              </option>
              <option value="office" selected={contactInfo.category === 'office'}>
                オフィスの見学
              </option>
              <option value="sponsor" selected={contactInfo.category === 'sponsor'}>
                サークルへの出資 (スポンサー)
              </option>
              <option value="member" selected={contactInfo.category === 'member'}>
                メンバー個人への要件
              </option>
              <option value="other" selected={contactInfo.category === 'other'}>
                その他
              </option>
              {/* ここのカテゴリは仮 */}
            </select>
          </div>
          <div className={styles.section}>
            <label htmlFor="message" className={`${styles.label} ${styles.isRequired}`}>
              メッセージ
            </label>
            <textarea
              name="message"
              value={contactInfo.message}
              onChange={changeTextarea}
              className={styles.form}
            />
          </div>
          <div className={styles.section}>
            <button className={styles.button} disabled={!canSubmit}>
              送信
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
