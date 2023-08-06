export type MoveDirection = { x: number; y: number };

export const position: number[][] = [[50, 500]];
export let gunPosition: number[][] = [[]];

export const gunShot = async () => {
  console.log('gunShot動作');
  gunPosition.push([position[0][0] + 50, position[0][1] + 25]);
};
setInterval(() => {
  moveGun();
}, 5);

const moveGun = () => {
  const newGunPosition: number[][] = [];
  for (const s of gunPosition) {
    s[0] + 1 <= 1500 && newGunPosition.push([s[0] + 1, s[1]]);
  }
  gunPosition = newGunPosition;
  return gunPosition;
};

export const playerUsecase = (() => {
  return {
    movePlayer: async (movedirection: MoveDirection) => {
      position[0][0] += movedirection.x * 10;
      position[0][1] += movedirection.y * 10;
    },

    getPlayerPos: async () => {
      return position;
    },
  };
})();
