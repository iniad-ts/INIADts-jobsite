import styles from './MemberInfo.module.css';

type value = string | number | boolean | null | undefined | value[] | { [key: string]: value };

type ValueProps = {
  value: value;
  level: number;
  indent: number;
};

// eslint-disable-next-line complexity
const ValueComponent = ({ value, level, indent }: ValueProps) => {
  if (typeof value === 'string') {
    return <StringComponent value={value} />;
  } else if (typeof value === 'number') {
    return <NumberComponent value={value} />;
  } else if (typeof value === 'boolean') {
    return <BooleanComponent value={value} />;
  } else if (value === null) {
    return <NullComponent />;
  } else if (value === undefined) {
    return <UndefinedComponent />;
  } else if (Array.isArray(value)) {
    return <ArrayComponent value={value} level={level + 1} indent={indent} />;
  } else {
    return <ObjectComponent value={value} level={level + 1} indent={indent} />;
  }
};

const StringComponent = ({ value }: { value: string }) => {
  return (
    <span className={styles.string}>
      {`"`}
      {value}
      {`"`}
    </span>
  );
};

const NumberComponent = ({ value }: { value: number }) => (
  <span className={styles.number}>{value}</span>
);

const BooleanComponent = ({ value }: { value: boolean }) => (
  <span className={styles.boolean}>{value ? 'true' : 'false'}</span>
);

const NullComponent = () => <span className={styles.null}>null</span>;

const UndefinedComponent = () => <span className={styles.undefined}>undefined</span>;

type ArrayProps = {
  value: value[];
  level: number;
  indent: number;
};

const ArrayComponent = ({ value, level, indent }: ArrayProps) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  const child = value[0];
  const isArray = Array.isArray(child);
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'['}</span>
      {value.map((v, i) => (
        <span key={i} style={{ display: isArray ? 'block' : 'inline' }}>
          {isArray && '  '.repeat(indent + 1)}
          <ValueComponent value={v} level={level + 1} indent={indent + (isArray ? 1 : 0)} />
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

type ObjectProps = {
  value: { [key: string]: value };
  level: number;
  indent: number;
};

const ObjectComponent = ({ value, level, indent }: ObjectProps) => {
  const bracketLevel = ((level % 3) + 1) as 1 | 2 | 3;
  return (
    <span>
      <span className={styles[`bracket-${bracketLevel}`]}>{'{'}</span>
      {Object.entries(value).map(([k, v], i) => (
        <div key={i}>
          {'  '.repeat(indent + 1)}
          <span className={styles.key}>{k}:</span>{' '}
          <ValueComponent value={v} level={level + 1} indent={indent + 1} />,
        </div>
      ))}
      <span className={styles[`bracket-${bracketLevel}`]}>
        {Object.keys(value).length > 0 && '  '.repeat(indent)}
        {'}'}
      </span>
    </span>
  );
};

type InfoProps = {
  value: value;
  name: string;
};

const MemberInfo = ({ value, name }: InfoProps) => {
  return (
    <div className={styles.info}>
      <span className={styles.const}>const</span> <span className={styles.name}>{name}</span> ={' '}
      <ValueComponent value={value} level={1} indent={0} />;
    </div>
  );
};

export default MemberInfo;
