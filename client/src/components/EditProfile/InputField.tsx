import styles from './EditProfile.module.css';

type InputFieldProps = {
  label: string;
  type?: 'text' | 'number' | 'textarea';
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', name, onChange }) => {
  if (type === 'textarea') {
    return (
      <label>
        {label}:
        <textarea name={name} onChange={onChange} className={styles.input} />
      </label>
    );
  }

  return (
    <label>
      {label}:
      <input type={type} name={name} onChange={onChange} className={styles.input} />
    </label>
  );
};

export default InputField;
