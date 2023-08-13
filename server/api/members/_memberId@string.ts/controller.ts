import { membersRepository } from '$/repository/membersRepository';
import { memberUseCase } from '$/usecase/memberUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await membersRepository.getUnique(params.memberId),
  }),
  post: async ({ body }) => ({ status: 200, body: await memberUseCase.save(body) }),
}));
