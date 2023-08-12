import { membersRepository } from '$/repository/membersRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await membersRepository.getMember(query.githubId),
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await membersRepository.upsert(body),
  }),
}));
