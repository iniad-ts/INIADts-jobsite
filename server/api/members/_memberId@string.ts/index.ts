import type { MemberModel } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: MemberModel | null;
  };
  post: {
    reqBody: MemberModel;
    resBody: MemberModel | null;
  };
}>;
