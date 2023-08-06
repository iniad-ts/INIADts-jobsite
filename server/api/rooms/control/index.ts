import type { MoveDirection } from '$/Usecase/playerUsecase';

export type Methods = {
  get: {
    resBody: number[][];
  };
  post: {
    reqBody: MoveDirection;
  };
};
