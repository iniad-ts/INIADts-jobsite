import type { DefineMethods } from 'aspida';
import type { MemberListModel } from 'commonTypesWithClient/models';
export type Methods = DefineMethods<{
  get: {
    resBody: MemberListModel;
  };
}>;
