import styles from './memberInfo.module.css';

type value = string | number | boolean | null | undefined | value[] | { [key: string]: value };

type Props = {
  value: value;
  name: string;
};

// eslint-disable-next-line complexity
const valueComponent = (value: value, level: number) => {
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
    return arrayComponent(value, level + 1);
  } else {
    return objectComponent(value, level + 1);
  }
};

const stringComponent = (value: string) => {
  return (
    <span className={styles.string}>
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

const arrayComponent = (value: value[], level: number) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'['}</span>
      {value.map((v, i) => (
        <span key={i}>
          {valueComponent(v, level + 1)}
          {i !== value.length - 1 && ', '}
        </span>
      ))}
      <span className={styles[`bracket-${bracketLevel}`]}>{']'}</span>
    </span>
  );
};

const objectComponent = (value: { [key: string]: value }, level: number) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'{'}</span>
      {Object.entries(value).map(([k, v], i) => (
        <span key={i}>
          <span className={styles.key}>{k}:</span> {valueComponent(v, level + 1)}
          {i !== Object.entries(value).length - 1 && ', '}
        </span>
      ))}
      <span className={styles[`bracket-${bracketLevel}`]}>{'}'}</span>
    </span>
  );
};

const MemberInfo = ({ value, name }: Props) => {
  return (
    <div className={styles.info}>
      <span className={styles.const}>const</span> <span className={styles.name}>{name}</span> ={' '}
      {valueComponent(value, 1)};
    </div>
  );
};

export default MemberInfo;
