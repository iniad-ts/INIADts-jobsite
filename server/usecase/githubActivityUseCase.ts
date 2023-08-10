import type { GitHubActivityModel } from '$/commonTypesWithClient/models';
import { GITHUB_USERNAMES } from '$/service/envValues';
import { githubActivityRepository } from '../repository/githubActivityRepository';

const fetchActivity = async (userId: string): Promise<GitHubActivityModel> => {
  const data = await githubActivityRepository.fetchData(userId);
  if (data !== undefined) {
    await githubActivityRepository.upload(userId, data);
  }

  return { ...JSON.parse(data ?? '{}'), userId };
};

const fetchAllActivities = () => {
  GITHUB_USERNAMES.map(fetchActivity);
};

export const githubActivityUseCase = {
  fetchActivity,
  fetchAllActivities,
};
