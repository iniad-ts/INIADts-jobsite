import type { DirectoryModel, FileModel } from 'src/components/SideBar/SideBar';

export type MiniDirectoryModel = {
  directoryName: string;
  body: (FileModel | MiniDirectoryModel)[];
  isDisplay?: boolean;
  id?: string;
};

export const addIdDisplay = (object: MiniDirectoryModel): DirectoryModel => {
  const sideBarModel = JSON.parse(JSON.stringify(object));
  const addIdDisplayRecursive = (obj: MiniDirectoryModel) => {
    obj.id = String(Math.random());
    obj.isDisplay === null && obj.isDisplay === false;
    obj.body.forEach((o) => {
      'directoryName' in o && addIdDisplayRecursive(o);
    });
  };
  addIdDisplayRecursive(sideBarModel);
  return sideBarModel;
};
