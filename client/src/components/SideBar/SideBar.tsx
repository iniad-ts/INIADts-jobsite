import Link from 'next/link';
import { useState } from 'react';
import styles from './SideBar.module.css';
export type DirectoryModel = {
  directoryName: string;
  body: (FileModel | DirectoryModel)[];
  isDisplay: boolean;
  depth: number;
  id: string;
};

export type FileModel = {
  fileName: string;
  url?: string;
};

const Spacer = (props: { space: number }) => <div style={{ width: `${props.space * 20}px` }} />;

export const SideBar = (props: { inSide: DirectoryModel }) => {
  const [side, setSide] = useState(props.inSide);
  let isAlreadyDelete = false;

  const deleteTab = (name: string) => {
    const searchSide: DirectoryModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: DirectoryModel, id: string) => {
      if (obj.id === id && !isAlreadyDelete) {
        obj.isDisplay = !obj.isDisplay;
        setSide(searchSide);
        isAlreadyDelete = true;
      } else {
        obj.body
          .filter((s): s is DirectoryModel => 'directoryName' in s)
          .forEach((dir) => deleteTabRecursive(dir, id));
      }
    };
    deleteTabRecursive(searchSide, name);
  };
  const mapper = (obj: DirectoryModel) => {
    return (
      <div key={`${obj.id}`}>
        <div className={styles.column} onClick={() => deleteTab(obj.id)}>
          <Spacer space={obj.depth} />
          <div
            className={styles.arrow}
            style={{
              transform: obj.isDisplay ? 'rotate(0deg)' : 'rotate(-90deg)',
            }}
          />
          {obj.directoryName}
        </div>
        {obj.isDisplay && (
          <div>
            {obj.body.map((o, i) => {
              return 'directoryName' in o ? (
                mapper(o)
              ) : (
                <div key={`${o}-${i}`}>
                  <div className={styles.column} style={{ color: '#f00' }}>
                    <Spacer space={obj.depth + 1} />
                    <Link href={o.url ?? './no-url'}>{o.fileName}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  return <div className={styles.container}>{mapper(side)}</div>;
};
