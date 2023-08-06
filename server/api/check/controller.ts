import { enemyUsecase } from '$/Usecase/enemyUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await enemyUsecase.getAll_Enemies() }),
}));
