import type { DefineMethods } from 'aspida';
import type { GitHubActivityModel } from 'commonTypesWithClient/models';

export type Methods = DefineMethods<{
  get: {
    query: {
      userId: string;
    };
    resBody: GitHubActivityModel | null;
  };
  post: {
    reqBody: { userId: string };
    resBody: GitHubActivityModel;
  };
}>;
