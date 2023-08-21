import styles from './Input.module.css';

type Props = {
  label?: string;
  type?: string;
  name: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  shouldAutoComplete?: boolean;
};

const Input = ({
  label = '',
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  shouldAutoComplete = false,
}: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={styles.input}
          autoComplete={shouldAutoComplete ? 'on' : 'off'}
        />
      </label>
    </div>
  );
};

export default Input;
