import { GITHUB_USERNAMES } from '$/service/envValues';
import { githubActivityRepository } from '../repository/githubActivityRepository';

export type GithubActivity = {
  total: Record<string, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }>;
};

const fetchActivity = async (userId: string) => {
  const data = await githubActivityRepository.fetchData(userId);
  if (data !== undefined) {
    await githubActivityRepository.upload(userId, data);
  }

  return JSON.parse(data ?? '{}');
};

const fetchAllActivities = () => {
  GITHUB_USERNAMES.map(fetchActivity);
};

export const githubActivityUseCase = {
  fetchActivity,
  fetchAllActivities,
};
