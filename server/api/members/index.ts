import type { DefineMethods } from 'aspida';
import type { MemberModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    resBody: MemberModel[];
  };
  post: {
    reqBody: MemberModel;
    resBody: MemberModel | null;
  };
}>;
