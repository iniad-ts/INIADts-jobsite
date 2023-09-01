import type { GitHubActivityModel } from 'commonTypesWithClient/models';
import { githubActivityRepository } from '../repository/githubActivityRepository';

const fetchActivity = async (userName: string): Promise<GitHubActivityModel> => {
  const data = await githubActivityRepository.fetchData(userName);
  if (data !== undefined) {
    await githubActivityRepository.upload(userName, data);
  }

  return { ...JSON.parse(data ?? '{}'), githubId: userName };
};

export const githubActivityUseCase = {
  fetchActivity,
};
