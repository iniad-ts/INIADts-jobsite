import styles from './memberInfo.module.css';

type value = string | number | boolean | null | undefined | value[] | { [key: string]: value };

type Props = {
  value: value;
  name: string;
};

// eslint-disable-next-line complexity
const ValueComponent = (value: value, level: number, indent: number) => {
  if (typeof value === 'string') {
    return stringComponent(value);
  } else if (typeof value === 'number') {
    return NumberComponent(value);
  } else if (typeof value === 'boolean') {
    return BooleanComponent(value);
  } else if (value === null) {
    return NullComponent();
  } else if (value === undefined) {
    return UndefinedComponent();
  } else if (Array.isArray(value)) {
    return ArrayComponent(value, level + 1, indent);
  } else {
    return ObjectComponent(value, level + 1, indent);
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

const NumberComponent = (value: number) => {
  return <span className={styles.number}>{value}</span>;
};

const BooleanComponent = (value: boolean) => {
  return <span className={styles.boolean}>{value ? 'true' : 'false'}</span>;
};

const NullComponent = () => {
  return <span className={styles.null}>null</span>;
};

const UndefinedComponent = () => {
  return <span className={styles.undefined}>undefined</span>;
};

const ArrayComponent = (value: value[], level: number, indent: number) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  const child = value[0];
  const isArray = Array.isArray(child);
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'['}</span>
      {value.map((v, i) => (
        <span key={i} style={{ display: isArray ? 'block' : 'inline' }}>
          {isArray && '  '.repeat(indent + 1)}
          {ValueComponent(v, level + 1, indent + (isArray ? 1 : 0))}
          {i !== value.length - 1 && ', '}
        </span>
      ))}
      <span className={styles[`bracket-${bracketLevel}`]}>
        {isArray && '  '.repeat(indent)}
        {']'}
      </span>
    </span>
  );
};

const ObjectComponent = (value: { [key: string]: value }, level: number, indent: number) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'{'}</span>
      {Object.entries(value).map(([k, v], i) => (
        <div key={i}>
          {'  '.repeat(indent + 1)}
          <span className={styles.key}>{k}:</span> {ValueComponent(v, level + 1, indent + 1)},
        </div>
      ))}
      <span className={styles[`bracket-${bracketLevel}`]}>
        {Object.keys(value).length > 0 && '  '.repeat(indent)}
        {'}'}
      </span>
    </span>
  );
};

const MemberInfo = ({ value, name }: Props) => {
  return (
    <div className={styles.info}>
      <span className={styles.const}>const</span> <span className={styles.name}>{name}</span> ={' '}
      {ValueComponent(value, 1, 0)};
    </div>
  );
};

export default MemberInfo;
