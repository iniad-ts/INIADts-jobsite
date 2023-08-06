import styles from './userInfo.module.css';

const ArrayComponent = ({ array }: { array: string[] }) => {
  return (
    <span className={styles.array}>
      [
      {array.map((item, index) => {
        return <span key={index}>{`"${item}",`}</span>;
      })}
      ];
    </span>
  );
};

const ObjectComponent = (object: { [key: string]: string | string[] }) => {
  return (
    <>
      <span>{'{'}</span>
      {Object.keys(object).map((key, index) => {
        return (
          <div key={index} className={styles.object}>
            <span>{`  ${key}`}</span>
            <span>:</span>
            {Array.isArray(object[key]) ? (
              <ArrayComponent array={object[key] as string[]} />
            ) : (
              <span>{object[key]};</span>
            )}
          </div>
        );
      })}
      <span>{'}'};</span>
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
      const {objectName} = <ObjectComponent {...object} />
    </div>
  );
};

export default UserInfo;
