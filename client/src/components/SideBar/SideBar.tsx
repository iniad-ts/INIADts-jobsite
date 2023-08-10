import { useState } from 'react';
import styles from './SideBar.module.css';
export type DirectoryModel = {
  directoryName: string;
  body: (string | DirectoryModel)[];
  isDisplay?: boolean;
  depth?: number;
  id?: string;
};

const Spacer = (props: { space: number }) =>
  Boolean(props.space) &&
  [...Array(props.space)].map((_, i) => <div className={styles.spacer} key={`${i}`} />);
export const SideBar = (props: { inSide: DirectoryModel }) => {
  const addId = (obj: DirectoryModel) => {
    obj.id = String(Math.random());
    obj.body.forEach((o) => {
      typeof o !== 'string' && addId(o);
    });
  };
  addId(props.inSide);
  const [side, setSide] = useState<DirectoryModel>(props.inSide);
  let isAlreadyDelete = false;

  const deleteTab = (name: string) => {
    console.log(name);
    const searchSide: DirectoryModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: DirectoryModel, id: string) => {
      if (obj.id === id && !isAlreadyDelete) {
        obj.isDisplay = obj.isDisplay === true ? false : true;
        setSide(searchSide);
        isAlreadyDelete = true;
      } else {
        obj.body.forEach((s) => typeof s !== 'string' && deleteTabRecursive(s, id));
      }
    };
    deleteTabRecursive(searchSide, name);
  };
  const mapper = (obj: DirectoryModel, depth = -1) => {
    obj.depth = depth + 1;
    return (
      <div key={`${obj.id}`}>
        <div className={styles.column} key={`${obj}-1`} onClick={() => deleteTab(obj.id ?? '')}>
          <Spacer space={obj.depth} />
          <div
            className={styles.spacer}
            style={{
              backgroundColor: '#000',
              clipPath:
                obj.isDisplay === true
                  ? 'polygon(25% 65% , 45% 85%, 65% 65%, 65% 60%, 45% 80%, 25% 60%)'
                  : 'polygon(30% 45%, 50% 65%, 30% 85%, 25% 85%, 45% 65%, 25% 45%)',
            }}
          />
          {obj.directoryName}
        </div>
        {obj.isDisplay === true && (
          <div key={`${obj.id}-2`}>
            {obj.body.map((o: string | DirectoryModel, i: number) =>
              typeof o !== 'string' ? (
                mapper(o, obj.depth ?? 1)
              ) : (
                <div key={`${o}-${i}`}>
                  <div className={styles.column}>
                    <Spacer space={(obj.depth ?? 0) + 1} />
                    {o}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    );
  };
  return <div className={styles.container}>{mapper(side)}</div>;
};
