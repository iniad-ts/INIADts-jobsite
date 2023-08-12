import { membersRepository } from '$/repository/membersRepository';
import { memberUseCase } from '$/usecase/memberUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await memberUseCase.getAllMembers(),
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await membersRepository.upsert(body),
  }),
}));
