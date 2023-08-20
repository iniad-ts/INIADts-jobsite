import type { DefineMethods } from 'aspida';
import type { GitHubActivityModel } from 'commonTypesWithClient/models';
export type Methods = DefineMethods<{
  get: {
    resBody: GitHubActivityModel;
  };
}>;
