import type { MemberListModel, MemberModel } from '$/commonTypesWithClient/models';
import { membersRepository } from '$/repository/membersRepository';

const createMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const createdMember = membersRepository.saveToDB(member);
  await membersRepository.saveToS3(member);

  const memberList: MemberListModel = (await membersRepository.getListFromS3()) ?? { members: [] };
  memberList.members.push({
    githubId: member.githubId,
    userName: member.userName,
    graduateYear: member.graduateYear,
  });

  await membersRepository.saveListToS3(memberList);

  return createdMember;
};

const updateMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const updatedMember = await membersRepository.saveToDB(member);
  await membersRepository.saveToS3(member);
  if (updatedMember === null) return null;

  const memberList: MemberListModel | null = await membersRepository.getListFromS3();
  if (memberList === null) return null;

  const newMemberList: MemberListModel = {
    members: memberList.members.map((member) => {
      if (member.githubId === updatedMember.githubId) {
        return {
          githubId: updatedMember.githubId,
          userName: updatedMember.userName,
          graduateYear: updatedMember.graduateYear,
        };
      }
      return member;
    }),
  };
  await membersRepository.saveListToS3(newMemberList);

  return updatedMember;
};

export const memberUseCase = {
  save: async (member: MemberModel): Promise<MemberModel | null> => {
    const currentMember = await membersRepository.getFromS3(member.githubId);

    if (currentMember === null) {
      const newMember: MemberModel | null = await createMember(member);
      return newMember;
    }

    if (member === currentMember) return currentMember;

    const updatedMember: MemberModel | null = await updateMember(member);
    return updatedMember;
  },
};
