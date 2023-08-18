import { useState } from 'react';

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
    setHeight(Math.max(100, scrollHeight));
  };

  return (
    <div>
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
        />
      </label>
    </div>
  );
};

export default TextArea;
