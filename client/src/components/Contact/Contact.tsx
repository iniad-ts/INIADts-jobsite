import MemberInfo from '../MemberInfo/MemberInfo';
import styles from './Contact.module.css';

export const Contact = () => {
  const office = { 概要: 'aaa', お申込み: [] };
  return (
    <>
      <MemberInfo name="オフィスの見学" value={office} />
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfLGDE37Yfb4EhCvVT2bXBiVfwDEd_z1lIONTJTwj1iuZlCFg/formResponse">
        <div>
          <label htmlFor="e-mail">メールアドレス</label>
          <input
            className={styles.input}
            id="e-mail"
            type="text"
            name="entry.731820777"
            placeholder="example@mail.co.jp"
          />
        </div>
        <div>
          <label htmlFor="name">名前</label>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="entry.735383713"
            placeholder="松田光秀"
          />
        </div>
        <div>
          <label htmlFor="company">会社名</label>
          <input
            className={styles.input}
            id="company"
            type="text"
            name="entry.1940782631"
            placeholder="example@mail.co.jp"
          />
        </div>
        <div>
          <label htmlFor="name">件名</label>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="entry.2124166764"
            placeholder="件名"
          />
        </div>
        <div>
          <label htmlFor="company">内容</label>
          <div>
            <textarea
              className={styles.input}
              id="company"
              name="entry.286334661"
              placeholder="お問い合わせ内容"
            />
          </div>
          <button type="submit" name="button" value="送信">
            送信
          </button>
        </div>
      </form>
    </>
  );
};
