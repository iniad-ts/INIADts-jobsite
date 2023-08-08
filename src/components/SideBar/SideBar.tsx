import { useState } from 'react';
import styles from './SideBar.module.css';
export type SideBarModel = {
  directoryName: string;
  body: (string | SideBarModel)[];
  isDisplay?: boolean;
  depth?: number;
  id?: string;
};

export const SideBar = (props: { inSide: SideBarModel }) => {
  const addId = (obj: SideBarModel) => {
    obj.id = String(Math.random());
    obj.body.forEach((o) => {
      typeof o !== 'string' && addId(o);
    });
  };
  addId(props.inSide);
  const [side, setSide] = useState<SideBarModel>(props.inSide);
  let isAlreadyDelete = false;

  const deleteTab = (name: string) => {
    console.log(name);
    const searchSide: SideBarModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: SideBarModel, id: string): void => {
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
  const mapper = (obj: SideBarModel, depth: number) => {
    obj.depth = depth + 1;
    return (
      <li key={`${obj}`} onClick={() => deleteTab(obj.id ?? '')}>
        {`${'_'.repeat(obj.depth ?? 0)}${obj.isDisplay === true ? 'v' : '>'}${obj.directoryName}`}
        {obj.isDisplay === true && (
          <ul key={`${obj}-1`}>
            {obj.body.map((o: string | SideBarModel, i: number) =>
              typeof o !== 'string' ? (
                mapper(o, obj.depth ?? 0)
              ) : (
                <li
                  key={`${o}-${i}`}
                  onClick={() => {
                    isAlreadyDelete = true;
                    setTimeout(() => (isAlreadyDelete = false), 0);
                  }}
                >
                  {`${'_'.repeat((obj.depth ?? 0) + 1)}
                  ${o}`}
                </li>
              )
            )}
          </ul>
        )}
      </li>
    );
  };
  console.log(mapper(side, -1));
  return (
    <div className={styles.container}>
      <ul>{mapper(side, -1)}</ul>
    </div>
  );
};
