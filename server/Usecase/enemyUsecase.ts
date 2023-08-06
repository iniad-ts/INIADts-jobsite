import { enemyRepository } from '$/Repository/enemyRepository';
import type { EnemyModel } from '$/commonTypesWithClient/models';

import { EnemyIdParser } from '$/service/idParsers';
import { randomUUID } from 'crypto';

//敵の位置を取得する際にこれを使えば、全ての敵の情報が配列で返されます
//repositoryからgetEnemiesを直接たたくとusecaseがなぜか更新されないため1時的な回避策としてusecaseをapiでたたいて認識させてます
export const enemyUsecase = {
  getAll_Enemies: async (): Promise<EnemyModel[]> => {
    return await enemyRepository.getEnemies();
  },
};

setInterval(() => {
  create_enemy();
}, 4000);

setInterval(() => {
  // move_or_delete_enemy();
  move_Enemy();
  delete_off_screen_enemy();
}, 100);

// 仮初期値
const enemy_first_pos_x = 1800;
const enemy_speed = 5;
const enemy_radius = 20;
const enemy_hp = 10;

const create_enemy = async () => {
  const new_enemy: EnemyModel = {
    id: EnemyIdParser.parse(randomUUID()),
    pos: { x: enemy_first_pos_x, y: Math.floor(Math.random() * 690) + 1 },
    speed: enemy_speed,
    hp: enemy_hp,
    radius: enemy_radius,
  };
  await enemyRepository.save(new_enemy);
};

const move_Enemy = async () => {
  const enemies: EnemyModel[] = await enemyRepository.getEnemies();

  for (const enemy of enemies) {
    const moved_enemy: EnemyModel = {
      ...enemy,
      //ここは、後でenemyの複雑な動きに対応させる
      pos: { x: enemy.pos.x - 10, y: enemy.pos.y },
    };
    await enemyRepository.save(moved_enemy);
  }
};

const delete_off_screen_enemy = async () => {
  let enemies: EnemyModel[] = await enemyRepository.getEnemies();
  enemies = enemies.filter((enemy) => {
    //とりあえず50です
    if (enemy.pos.x < 50) {
      enemyRepository.declare(enemy.id);
      return false;
    } else {
      return true;
    }
  });
  //await Promise.allは、必要か微妙
  //await Promise.all(enemies.map((enemy) => enemyRepository.save(enemy)));
  // enemies.map((enemy) => enemyRepository.save(enemy));
};
