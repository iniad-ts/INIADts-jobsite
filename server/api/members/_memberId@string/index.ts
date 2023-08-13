import type { DefineMethods } from 'aspida';
import type { MemberModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: MemberModel | null;
  };
  post: {
    reqBody: MemberModel;
    resBody: MemberModel | null;
  };
}>;
