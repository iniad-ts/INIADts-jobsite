import type { MemberModel } from '$/commonTypesWithClient/models';
import { membersRepository } from '$/repository/membersRepository';

export const memberUseCase = {
  save: async (member: MemberModel): Promise<MemberModel | null> => {
    const updatedMember = await membersRepository.saveToDB(member);
    await membersRepository.saveToS3(member);
    return updatedMember;
  },
};
