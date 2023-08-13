import type { MemberModel } from '$/commonTypesWithClient/models';
import { membersRepository } from '$/repository/membersRepository';
import assert from 'assert';

export const memberUseCase = {
  getAllMembers: async (): Promise<MemberModel[]> => {
    const memberList = await membersRepository.getMemberList();
    const allMembers = await Promise.all(
      memberList.map(async (githubId) => {
        const member = await membersRepository.getMember(githubId);
        assert(member !== null, 'member is null');
        return member;
      })
    );
    return allMembers;
  },
};
