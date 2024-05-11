import { Koujichu } from '@site/src/components/Koujichu/Koujichu';
import { members } from '@site/src/data/members';
import Layout from '@theme/Layout';
import type { ChangeEvent } from 'react';
import React, { useMemo, useState } from 'react';
import styles from './index.module.css';

type ContactDetail = {
  name: string;
  mail: string;
  group?: string;
  category: string;
  forMember?: string;
  content: string;
};

type Inputs = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const defaultDetail = {
  name: '',
  mail: '',
  category: '',
  content: '',
};

const Contact = () => {
  const [contactDetail, setContactDetail] = useState<ContactDetail>(defaultDetail);

  const changeTextAreaHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    const newHeight = Math.min(Math.max(target.scrollHeight, 64), 200);
    target.style.height = `${newHeight}px`;
  };

  const isTextArea = (e: Inputs): e is ChangeEvent<HTMLTextAreaElement> => {
    return e.target.tagName === 'TEXTAREA';
  };

  const handleInput = (e: Inputs) => {
    const { name, value, tagName } = e.target;
    setContactDetail({ ...contactDetail, [name]: value });

    if (tagName === 'TEXTAREA') isTextArea(e) && changeTextAreaHeight(e);
  };

  const isEmail = (mail: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(mail);
  };

  const isDisabled = useMemo(() => {
    const terms = [
      contactDetail.name !== '',
      isEmail(contactDetail.mail),
      contactDetail.category !== '',
      !(
        contactDetail.category === 'forMember' &&
        (contactDetail.forMember === '' || contactDetail.forMember === undefined)
      ),
      contactDetail.content !== '',
    ];

    return !terms.every(Boolean);
  }, [contactDetail]);

  const submit = () => {
    console.table(contactDetail);
    setContactDetail(defaultDetail);
  };

  return (
    <Layout title="Contact">
      <Koujichu />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>お問い合わせ</h1>
          <p>Contact</p>
        </div>
        <main className={styles.main}>
          <div className={`${styles.input} ${styles.isRequired}`}>
            <label htmlFor="name">お名前</label>
            <input type="text" name="name" onChange={handleInput} value={contactDetail.name} />
          </div>
          <div className={`${styles.input} ${styles.isRequired}`}>
            <label htmlFor="mail">メールアドレス</label>
            <input type="email" name="mail" onChange={handleInput} value={contactDetail.mail} />
          </div>
          <div className={styles.input}>
            <label htmlFor="group">団体・会社名</label>
            <input type="text" name="group" onChange={handleInput} value={contactDetail.group} />
          </div>
          <div className={`${styles.input} ${styles.isRequired}`}>
            <label htmlFor="category">カテゴリー</label>
            <select name="category" onChange={handleInput}>
              <option value="" hidden>
                --- 未選択 ---
              </option>
              <option value="office" selected={contactDetail.category === 'office'}>
                👀 活動オフィスの見学
              </option>
              <option value="sponsor" selected={contactDetail.category === 'sponsor'}>
                💰 サークルへの出資
              </option>
              <option value="forMember" selected={contactDetail.category === 'forMember'}>
                🤝 メンバーへの連絡
              </option>
              <option value="other" selected={contactDetail.category === 'other'}>
                📝 その他
              </option>
            </select>
          </div>
          {contactDetail.category === 'forMember' && (
            <div className={`${styles.input} ${styles.isRequired}`}>
              <label htmlFor="forMember">メンバー</label>
              <select name="forMember" onChange={handleInput}>
                <option value="" hidden>
                  --- 未選択 ---
                </option>
                {members.map((member) => (
                  <option
                    value={member.userName}
                    selected={contactDetail.forMember === member.userName}
                    key={member.userName}
                  >
                    {member.displayName}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className={`${styles.input} ${styles.isRequired}`}>
            <label htmlFor="content">内容</label>
            <textarea name="content" onChange={handleInput} value={contactDetail.content} />
          </div>
          <button disabled={isDisabled} className={styles.button} onClick={submit}>
            送信
          </button>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
