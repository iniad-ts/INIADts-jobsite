import type { MemberModel } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: {
      githubId: string;
    };
    resBody: MemberModel | null;
  };
  post: {
    reqBody: MemberModel;
  };
}>;
