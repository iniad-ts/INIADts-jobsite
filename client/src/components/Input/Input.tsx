type Props = {
  label: string;
  type?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ label, type = 'text', name, onChange, placeholder }: Props) => {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input type={type} name={name} onChange={onChange} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default Input;
