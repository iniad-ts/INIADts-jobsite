import type { MemberModel } from '$/commonTypesWithClient/models';
import type { MemberList } from '$/repository/membersRepository';
import { membersRepository } from '$/repository/membersRepository';

const createMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const [createdMember] = await Promise.all([
    await membersRepository.saveToDB(member),
    await membersRepository.saveToS3(member),
  ]);

  const memberList: MemberList = (await membersRepository.getListFromS3()) ?? { members: [] };
  memberList.members.push({ githubId: member.githubId, graduateYear: member.graduateYear });

  await membersRepository.saveListToS3(memberList);

  return createdMember;
};

const updateMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const [updatedMember] = await Promise.all([
    await membersRepository.saveToDB(member),
    await membersRepository.saveToS3(member),
  ]);
  if (updatedMember === null) return null;

  const memberList: MemberList | null = await membersRepository.getListFromS3();
  if (memberList === null) return null;

  const newMemberList: MemberList = {
    members: memberList.members.map((member) => {
      if (member.githubId === updatedMember.githubId) {
        return { githubId: member.githubId, graduateYear: updatedMember.graduateYear };
      }
      return member;
    }),
  };
  membersRepository.saveListToS3(newMemberList);

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
