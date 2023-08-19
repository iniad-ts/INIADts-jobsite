import styles from './Textarea.module.css';

type Props = {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isFitContent?: boolean;
};

const TextArea = ({ label, name, onChange, placeholder, isFitContent = true }: Props) => {
  const changeHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    const { scrollHeight } = e.target;
    const height = Math.min(Math.max(scrollHeight, 100), 300);
    e.target.style.height = `${height}px`;
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
          className={styles.textarea}
          style={{ height: isFitContent ? 'auto' : '100px' }}
        />
      </label>
    </div>
  );
};

export default TextArea;
