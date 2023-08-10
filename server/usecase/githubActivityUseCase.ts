import { GITHUB_USERNAMES } from '$/service/envValues';
import { githubActivityRepository } from '../repository/githubActivityRepository';

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
