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

  const deleteTab = (name: string) => {
    const searchSide: DirectoryModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: DirectoryModel, id: string) => {
      if (obj.id === id) {
        obj.isDisplay = !obj.isDisplay;
        setSide(searchSide);
      } else {
        obj.body
          .filter((s): s is DirectoryModel => 'directoryName' in s)
          .forEach((dir) => deleteTabRecursive(dir, id));
      }
    };
    deleteTabRecursive(searchSide, name);
  };

  const Mapper = (props: { obj: DirectoryModel }) => (
    <div>
      <div className={styles.column} onClick={() => deleteTab(props.obj.id)}>
        <Spacer space={props.obj.depth} />
        <div
          className={styles.arrow}
          style={{
            transform: props.obj.isDisplay ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
        />
        {props.obj.directoryName}
      </div>
      {props.obj.isDisplay && (
        <div>
          {props.obj.body.map((o, i) => {
            return 'directoryName' in o ? (
              <Mapper obj={o} key={`${o.id}`} />
            ) : (
              <div key={`${o}-${i}`}>
                <div className={styles.column} style={{ color: '#f00' }}>
                  <Spacer space={props.obj.depth + 1} />
                  <Link href={o.url ?? `./${Math.random()}`}>{o.fileName}</Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <Mapper obj={side} />
    </div>
  );
};
