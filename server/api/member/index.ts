import type { DefineMethods } from 'aspida';
import type { MemberModel } from 'commonTypesWithClient/models';

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
