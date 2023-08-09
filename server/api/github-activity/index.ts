import type { GithubActivity } from '$/usecase/githubActivityUseCase';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query: {
      userId: string;
    };
    resBody: GithubActivity | null;
  };
  post: {
    reqBody: { userId: string };
    resBody: GithubActivity | null;
  };
}>;
