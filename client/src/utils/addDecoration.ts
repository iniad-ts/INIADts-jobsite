import type { DirectoryModel, FileModel } from 'src/components/SideBar/SideBar';

export type MiniDirectoryModel = {
  type: 'dir';
  directoryName: string;
  body: (FileModel | MiniDirectoryModel)[];
  isDisplay?: boolean;
  id?: string;
  depth?: number;
};

export const addDecoration = (object: MiniDirectoryModel): DirectoryModel => {
  const sideBarModel = JSON.parse(JSON.stringify(object));
  const addIdDisplayRecursive = (obj: MiniDirectoryModel, depth?: number) => {
    obj.id = String(Math.random());
    if (obj.isDisplay === null) {
      obj.isDisplay = false;
    }
    obj.depth = depth === undefined ? 0 : depth + 1;
    obj.body.forEach((o) => {
      o.type === 'dir' && addIdDisplayRecursive(o, obj.depth);
    });
  };
  addIdDisplayRecursive(sideBarModel);
  return sideBarModel;
};
