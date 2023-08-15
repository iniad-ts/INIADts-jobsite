import type { DefineMethods } from 'aspida';
import type { MemberList } from 'commonTypesWithClient/models';
export type Methods = DefineMethods<{
  get: {
    resBody: MemberList;
  };
}>;
