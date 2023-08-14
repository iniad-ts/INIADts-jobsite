import type { GitHubActivityModel, MemberList } from 'commonTypesWithClient/models';
import { githubActivityRepository } from '../repository/githubActivityRepository';
import { membersRepository } from './../repository/membersRepository';

const fetchActivity = async (userName: string, githubId: string): Promise<GitHubActivityModel> => {
  const data = await githubActivityRepository.fetchData(userName);
  if (data !== undefined) {
    await githubActivityRepository.upload(userName, data);
  }

  return { ...JSON.parse(data ?? '{}'), githubId: userName };
};

const fetchAllActivities = async () => {
  const MemberList: MemberList | null = await membersRepository.getListFromS3();
  if (MemberList === null) return;

  const activities = await Promise.all(
    MemberList.members.map(async (member) => {
      const activity = await fetchActivity(member.userName, member.githubId);
      return activity;
    })
  );

  return activities;
};

export const githubActivityUseCase = {
  fetchActivity,
  fetchAllActivities,
};
