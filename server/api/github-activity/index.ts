import type { GitHubActivityModel } from '$/commonTypesWithClient/models';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: {
      userId: string;
    };
    resBody: GitHubActivityModel | null;
  };
  post: {
    reqBody: { userId: string };
    resBody: GitHubActivityModel | null;
  };
}>;
