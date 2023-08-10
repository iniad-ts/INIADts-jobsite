type value = string | number | boolean | null | undefined | value[] | { [key: string]: value };

type Props = {
  value: value;
  name: string;
};

// eslint-disable-next-line complexity
const valueComponent = (value: value) => {
  if (typeof value === 'string') {
    return stringComponent(value);
  } else if (typeof value === 'number') {
    return numberComponent(value);
  } else if (typeof value === 'boolean') {
    return booleanComponent(value);
  } else if (value === null) {
    return nullComponent();
  } else if (value === undefined) {
    return undefinedComponent();
  } else if (Array.isArray(value)) {
    return arrayComponent(value);
  } else {
    return objectComponent(value);
  }
};

const stringComponent = (value: string) => {
  return (
    <span>
      {`"`}
      {value}
      {`"`}
    </span>
  );
};

const numberComponent = (value: number) => {
  return <span>{value}</span>;
};

const booleanComponent = (value: boolean) => {
  return <span>{value ? 'true' : 'false'}</span>;
};

const nullComponent = () => {
  return <span>null</span>;
};

const undefinedComponent = () => {
  return <span>undefined</span>;
};

const arrayComponent = (value: value[]) => {
  return (
    <span>
      {'['}
      {value.map((v, i) => (
        <span key={i}>
          {valueComponent(v)}
          {i !== value.length - 1 && ', '}
        </span>
      ))}
      {']'}
    </span>
  );
};

const objectComponent = (value: { [key: string]: value }) => {
  return (
    <span>
      {'{'}
      {Object.entries(value).map(([k, v], i) => (
        <span key={i}>
          <span>{k}</span>: {valueComponent(v)}
          {i !== Object.entries(value).length - 1 && ', '}
        </span>
      ))}
      {'}'}
    </span>
  );
};

const MemberInfo = ({ value, name }: Props) => {
  return (
    <div>
      <span>const</span> <span>{name}</span> = {valueComponent(value)};
    </div>
  );
};

export default MemberInfo;
