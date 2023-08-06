import { playerUsecase } from '$/Usecase/playerUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({
    status: 200,
    body: await playerUsecase.getPlayerPos(),
  }),
  post: async ({ body }) => ({
    status: 200,
    body: await playerUsecase.movePlayer(body),
  }),
}));
