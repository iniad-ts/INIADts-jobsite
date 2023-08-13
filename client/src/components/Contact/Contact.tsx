import { useRef, useState } from 'react';
import MemberInfo from '../MemberInfo/MemberInfo';
import styles from './Contact.module.css';

type FormModel = {
  id: string;
  name: string;
  placeholder: string;
  label: string;
};

const InputForm = ({ id, name, placeholder, label }: FormModel) => {
  const [length, setWidth] = useState(placeholder.length * 15);
  const elm = useRef(null);
  const handleTextareaChange = (event: any) => {
    elm.current = event.target.value;
    console.log(elm.current);
    setWidth(Math.max(placeholder.length * 15, [...(elm.current ?? [])].length * 15));
  };
  return (
    <div className={styles.column}>
      <label htmlFor={id} className={styles.key}>
        {'  '}
        {label}:{' '}
      </label>
      <input
        className={styles.input}
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        ref={elm}
        onChange={handleTextareaChange}
        style={{ width: length }}
      />
      <label htmlFor={id}>,</label>
    </div>
  );
};

const TextForm = ({ id, name, placeholder, label }: FormModel) => {
  const [length, setWidth] = useState(120);
  const elm = useRef(null);
  const handleTextareaChange = (event: any) => {
    // テキストエリアの内容が変更されるたびに useRef を更新
    // const element = elm.current.getBoundingClientRect();
    // console.log(JSON.stringify(element));
    elm.current = event.target.value;
    console.log(elm.current);
    setWidth(Math.max(120, [...(elm.current ?? [''])].length * 15));
  };
  return (
    <div className={(styles.column2, styles.wrap)}>
      <label htmlFor="company" className={styles.key}>
        {'  '}
        {label}:{' '}
      </label>
      <textarea
        className={styles.textarea}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={elm}
        onChange={handleTextareaChange}
        style={{ width: length }}
      />
    </div>
  );
};

const SubmitButton = () => (
  <button type="submit" name="button" value="送信">
    送信
  </button>
);
const office = { 概要: 'aaa', お申込み: [] };

export const Contact = () => {
  return (
    <div className={styles.container}>
      <MemberInfo name="オフィスの見学" value={office} />
      <span className={styles.const}>const</span> <span className={styles.name}>お問い合わせ</span>
      {' = '}
      <span className={styles['bracket-3']}>{'{'}</span>
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfLGDE37Yfb4EhCvVT2bXBiVfwDEd_z1lIONTJTwj1iuZlCFg/formResponse">
        <InputForm
          id="e-mail"
          name="entry.731820777"
          placeholder="example@mail.co.jp"
          label="メールアドレス"
        />
        <InputForm id="name" name="entry.735383713" placeholder="赤羽太郎" label="名前" />
        <InputForm
          id="company"
          name="entry.1940782631"
          placeholder="あかばね（株）"
          label="会社名"
        />
        <InputForm id="title" name="entry.2124166764" placeholder="件名" label="件名" />
        <TextForm id="company" name="entry.286334661" placeholder="お問い合わせ内容" label="内容" />
        <span className={styles['bracket-3']}>{'}'}</span>
        {';'}
        <br />
        <SubmitButton />
      </form>
    </div>
  );
};
