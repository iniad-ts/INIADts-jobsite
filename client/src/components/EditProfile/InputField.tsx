type InputFieldProps = {
  label: string;
  type?: 'text' | 'number' | 'textarea';
  name?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  className,
}) => {
  if (type === 'textarea') {
    return (
      <label>
        {label}:
        <textarea name={name} onChange={onChange} value={value} className={className} />
      </label>
    );
  }

  return (
    <label>
      {label}:
      <input type={type} name={name} onChange={onChange} value={value} className={className} />
    </label>
  );
};

export default InputField;
