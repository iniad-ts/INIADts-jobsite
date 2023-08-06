import styles from './userInfo.module.css';

const ArrayComponent = ({ array }: { array: string[] }) => {
  return (
    <>
      <span className={styles.array}>[</span>
      {array.map((item, index) => {
        const comma = array.length - 1 === index ? '' : ', ';
        return (
          <>
            <span key={index} className={styles.string}>{`"${item}"`}</span>
            {comma}
          </>
        );
      })}
      <span className={styles.array}>]</span>
    </>
  );
};

const ObjectComponent = (object: { [key: string]: string | string[] }) => {
  return (
    <>
      <span className={styles.object}>{'{'}</span>
      {Object.keys(object).map((key, index) => {
        return (
          <div key={index}>
            <span className={styles.key}>{`  ${key}: `}</span>
            {Array.isArray(object[key]) ? (
              <ArrayComponent array={object[key] as string[]} />
            ) : (
              <span className={styles.string}>{`"${object[key]}"`}</span>
            )}
            ,
          </div>
        );
      })}
      <span className={styles.object}>{'}'};</span>
    </>
  );
};

type PropsInfo = {
  object: Record<string, string | string[]>;
  objectName: string;
};

const UserInfo = ({ object, objectName }: PropsInfo) => {
  return (
    <div className={styles.info}>
      <span className={styles.const}>const</span>{' '}
      <span className={styles.object}>{objectName}</span> = <ObjectComponent {...object} />
    </div>
  );
};

export default UserInfo;
