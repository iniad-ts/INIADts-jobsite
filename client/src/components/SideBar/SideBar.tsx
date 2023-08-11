import Link from 'next/link';
import { useState } from 'react';
import type { MiniDirectoryModel } from 'src/utils/addDecoration';
import { addDecoration } from 'src/utils/addDecoration';
import styles from './SideBar.module.css';
export type DirectoryModel = {
  type: 'dir';
  directoryName: string;
  body: (FileModel | DirectoryModel)[];
  isDisplay: boolean;
  depth: number;
  id: string;
};

export type FileModel = {
  type: 'file';
  fileName: string;
  url?: string;
};

const Spacer = (props: { space: number }) => <div style={{ width: `${props.space * 10}px` }} />;

export const SideBar = (props: { inSide: MiniDirectoryModel }) => {
  const [side, setSide] = useState(addDecoration(props.inSide));
  const deleteTab = (id: string) => {
    const searchSide: DirectoryModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: DirectoryModel) => {
      if (obj.id === id) {
        obj.isDisplay = !obj.isDisplay;
        setSide(searchSide);
      } else {
        obj.body
          .filter((s): s is DirectoryModel => s.type === 'dir')
          .forEach((dir) => deleteTabRecursive(dir));
      }
    };
    deleteTabRecursive(searchSide);
  };

  const Mapper = (props: { obj: DirectoryModel }) => (
    <div>
      <div className={styles.column} onClick={() => deleteTab(props.obj.id)}>
        <Spacer space={props.obj.depth} />
        <div style={{ width: 20 }}>
          <div
            className={styles.arrow}
            style={{
              transform: `rotate(${props.obj.isDisplay ? 135 : 45}deg)`,
            }}
          />
        </div>
        {props.obj.directoryName}
      </div>
      {props.obj.isDisplay && (
        <div>
          {props.obj.body.map((o, i) =>
            o.type === 'dir' ? (
              <Mapper obj={o} key={o.id} />
            ) : (
              <div key={i}>
                <div className={styles.column} style={{ color: '#f00' }}>
                  <Spacer space={props.obj.depth + 1} />
                  <Link href={o.url ?? `./${Math.random()}`}>{o.fileName}</Link>
                </div>
              </div>
            )
          )}
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
