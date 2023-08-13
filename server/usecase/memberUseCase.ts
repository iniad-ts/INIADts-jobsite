import type { MemberModel } from '$/commonTypesWithClient/models';
import { membersRepository } from '$/repository/membersRepository';

const createMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const newMember = await membersRepository.saveToDB(member);
  await membersRepository.saveToS3(member);
  if (newMember === null) return null;

  const membersList = await membersRepository.getListFromS3();
  if (membersList === null) return null;
  // FIXME: リストがなかったら新規作成すべきかも

  const newList = [...membersList.members, newMember];

  await membersRepository.saveListToS3({ members: newList });

  return newMember;
};

const updateMember = async (member: MemberModel): Promise<MemberModel | null> => {
  const updatedMember = await membersRepository.saveToDB(member);
  await membersRepository.saveToS3(member);

  const membersList = await membersRepository.getListFromS3();
  if (membersList === null) return null;

  const newList = membersList?.members.map((member) => {
    if (member.githubId === updatedMember?.githubId) {
      return {
        ...member,
        githubId: updatedMember.githubId,
        graduateYear: updatedMember.graduateYear,
      };
    }
    return member;
  });

  await membersRepository.saveListToS3({ members: newList });

  return updatedMember;
};

export const memberUseCase = {
  save: async (member: MemberModel): Promise<MemberModel | null> => {
    const beforeMember = await membersRepository.getFromS3(member.githubId);

    if (beforeMember === null) {
      return await createMember(member);
    }

    if (beforeMember !== member) {
      return await updateMember(member);
    }
    return null;
  },
};
