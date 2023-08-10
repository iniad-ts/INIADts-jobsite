import Link from 'next/link';
import { useState } from 'react';
import styles from './SideBar.module.css';
export type DirectoryModel = {
  directoryName: string;
  body: (FileModel | DirectoryModel)[];
  isDisplay: boolean;
  depth?: number;
  id: string;
};

export type FileModel = {
  fileName: string;
  url?: string;
};

const Spacer = (props: { space: number }) => (
  <div className={styles.spacer} style={{ width: `${props.space * 20}px` }} />
);

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
  const mapper = (obj: DirectoryModel, depth = -1) => {
    obj.depth = depth + 1;
    return (
      <div key={`${obj.id}`}>
        <div className={styles.column} key={`${obj}-1`} onClick={() => deleteTab(obj.id)}>
          <Spacer space={obj.depth} />
          <div
            className={styles.spacer}
            style={{
              backgroundColor: '#000',
              clipPath: obj.isDisplay
                ? 'polygon(25% 65% , 45% 85%, 65% 65%, 65% 60%, 45% 80%, 25% 60%)'
                : 'polygon(30% 45%, 50% 65%, 30% 85%, 25% 85%, 45% 65%, 25% 45%)',
            }}
          />
          {obj.directoryName}
        </div>
        {obj.isDisplay && (
          <div>
            {obj.body.map((o, i) => {
              return 'directoryName' in o ? (
                mapper(o, obj.depth ?? 1)
              ) : (
                <div key={`${o}-${i}`}>
                  <div className={styles.column} style={{ color: '#f00' }}>
                    <Spacer space={(obj.depth ?? 0) + 1} />
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
