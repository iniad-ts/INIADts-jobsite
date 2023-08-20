import { membersRepository } from '$/repository/membersRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await membersRepository.getFromDB(params.memberId),
  }),
}));
