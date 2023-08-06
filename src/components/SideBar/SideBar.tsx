import { useState } from 'react';
import styles from './SideBar.module.css';
export type SideBarModel = {
  directoryName: string;
  body: (string | SideBarModel)[];
  isDisplay?: boolean;
};

export const SideBar = (props: { inSide: SideBarModel }) => {
  const [side, setSide] = useState<SideBarModel>({
    directoryName: 'sideBar',
    body: [
      { directoryName: 'home', body: ['home'] },
      {
        directoryName: 'member',
        body: [
          { directoryName: '24', body: ['aaa', 'iii'] },
          { directoryName: '25', body: ['uuu', 'eee'] },
        ],
      },
      { directoryName: 'contact', body: ['contact'] },
    ],
    isDisplay: true,
  });
  let isAlreadyDelete = false;

  const deleteTab = (name: string) => {
    console.log(name);
    const searchSide: SideBarModel = JSON.parse(JSON.stringify(side));
    const deleteTabRecursive = (obj: SideBarModel, n: string): void => {
      // console.log(obj.name, !isAlreadyDelete);
      if (obj.directoryName === n && !isAlreadyDelete) {
        obj.isDisplay = obj.isDisplay === true ? false : true;
        // console.log(searchSide);
        setSide(searchSide);
        isAlreadyDelete = true;
      } else {
        obj.body.forEach((s) => typeof s !== 'string' && deleteTabRecursive(s, n));
      }
    };
    deleteTabRecursive(searchSide, name);
  };
  const mapper = (obj: SideBarModel) => (
    <li key={`${obj}`} onClick={() => deleteTab(obj.directoryName)}>
      {`${obj.isDisplay === true ? '⇩' : '>'}${obj.directoryName}`}
      <ul key={`${obj}1`}>
        {obj.isDisplay === true &&
          obj.body?.map((o: string | SideBarModel, i: number) =>
            typeof o !== `string` ? (
              mapper(o)
            ) : (
              <li
                key={`${o}${i}`}
                onClick={() => {
                  isAlreadyDelete = true;
                  setTimeout(() => (isAlreadyDelete = false), 0);
                }}
              >
                {o}
              </li>
            )
          )}
      </ul>
    </li>
  );
  return (
    <div className={styles.container}>
      <ul>{mapper(side)}</ul>
    </div>
  );
};
