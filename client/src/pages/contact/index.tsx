import Layout from '@theme/Layout';
import type { ChangeEvent } from 'react';
import React, { useMemo, useState } from 'react';
import styles from './index.module.css';

type Category =
  | '👀 活動オフィスの見学'
  | '💰 サークルへの出資'
  | '🤝 メンバーへの連絡'
  | '📝 その他';

type FormData = {
  name: string;
  mail: string;
  group: string;
  category: Category | '';
  content: string;
};

const formKeys: Record<keyof FormData, string> = {
  name: 'entry.914360394',
  mail: 'entry.361451444',
  group: 'entry.750967254',
  category: 'entry.582132371',
  content: 'entry.1530640172',
};

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd1XA9NV-tEDgBGW-VhXMO43gra6Ow3_TphAAbE0I0fWBGaQQ/formResponse';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mail: '',
    group: '',
    category: '',
    content: '',
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const urlParams = new URLSearchParams();

    urlParams.append(formKeys.name, formData.name);
    urlParams.append(formKeys.mail, formData.mail);
    urlParams.append(formKeys.group, formData.group);
    urlParams.append(formKeys.category, formData.category);
    urlParams.append(formKeys.content, formData.content);

    urlParams.append('submit', 'Submit');

    fetch(`${FORM_URL}?${urlParams.toString()}`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        window.location.href = 'contact/complete';
      })
      .catch(() => {
        alert('送信に失敗しました。');
      });
  };

  const isDisabled = useMemo(() => {
    return Object.entries(formData).some(([key, value]) => key !== 'group' && value === '');
  }, [formData]);

  return (
    <Layout title="Contact">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>お問い合わせ</h1>
          <p>Contact</p>
        </div>
        <main className={styles.main}>
          <form>
            <div className={`${styles.input} ${styles.isRequired}`}>
              <label htmlFor="name">お名前</label>
              <input
                type="text"
                autoComplete="off"
                required={true}
                id="name"
                value={formData.name ?? undefined}
                onChange={handleInput}
              />
            </div>
            <div className={`${styles.input} ${styles.isRequired}`}>
              <label htmlFor="mail">メールアドレス</label>
              <input type="email" required={true} id="mail" onChange={handleInput} />
            </div>
            <div className={styles.input}>
              <label htmlFor="group">団体・会社名</label>
              <input type="text" autoComplete="off" id="group" onChange={handleInput} />
            </div>
            <div className={`${styles.input} ${styles.isRequired}`}>
              <label htmlFor="category">カテゴリー</label>
              <select onChange={handleInput} id="category">
                <option value="" hidden>
                  --- 未選択 ---
                </option>
                <option
                  value="👀 活動オフィスの見学"
                  selected={formData.category === '👀 活動オフィスの見学'}
                >
                  👀 活動オフィスの見学
                </option>
                <option
                  value="💰 サークルへの出資"
                  selected={formData.category === '💰 サークルへの出資'}
                >
                  💰 サークルへの出資
                </option>
                <option
                  value="🤝 メンバーへの連絡"
                  selected={formData.category === '🤝 メンバーへの連絡'}
                >
                  🤝 メンバーへの連絡
                </option>
                <option value="📝 その他" selected={formData.category === '📝 その他'}>
                  📝 その他
                </option>
              </select>
            </div>
            <div className={`${styles.input} ${styles.isRequired}`}>
              <label htmlFor="content">内容</label>
              <textarea id="content" onChange={handleInput} />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isDisabled}
              className={styles.button}
            >
              送信
            </button>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
