import { useState } from 'react';
import styles from './Textarea.module.css';

type Props = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isFitContent?: boolean;
};

const TextArea = ({ label, name, onChange, placeholder, isFitContent = true }: Props) => {
  const [height, setHeight] = useState(100);

  const changeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight } = e.target;
    setHeight(Math.min(Math.max(100, scrollHeight), 500));
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name}>
        {label}
        <textarea
          name={name}
          onChange={(e) => {
            changeHeight(e);
            isFitContent && onChange(e);
          }}
          placeholder={placeholder}
          style={{ height: `${height}px` }}
          className={styles.textarea}
        />
      </label>
    </div>
  );
};

export default TextArea;
