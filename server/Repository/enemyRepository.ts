import type { EnemyId } from '$/commonTypesWithClient/branded';
import type { EnemyModel } from '$/commonTypesWithClient/models';
import { EnemyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import type { Enemy } from '@prisma/client';
import { z } from 'zod';

const toEnemyModel = (prismaEnemy: Enemy): EnemyModel => ({
  id: EnemyIdParser.parse(prismaEnemy.id),
  pos: z
    .object({
      x: z.number(),
      y: z.number(),
    })
    .parse(prismaEnemy.pos),
  speed: z.number().parse(prismaEnemy.speed),
  hp: z.number().parse(prismaEnemy.hp),
  radius: z.number().parse(prismaEnemy.radius),
});

export const enemyRepository = {
  getEnemies: async (): Promise<EnemyModel[]> => {
    const prismaEnemy = await prismaClient.enemy.findMany();
    return prismaEnemy.map(toEnemyModel);
  },
  save: async (enemy: EnemyModel) => {
    await prismaClient.enemy.upsert({
      where: { id: enemy.id },
      update: {
        pos: enemy.pos,
        //speed upするかも？
        speed: enemy.speed,
        hp: enemy.hp,
        //途中でサイズ変わるかも？
        radius: enemy.radius,
      },
      create: {
        id: enemy.id,
        pos: enemy.pos,
        speed: enemy.speed,
        hp: enemy.hp,
        radius: enemy.radius,
      },
    });
  },
  declare: async (id: EnemyId) => {
    await prismaClient.enemy.delete({
      where: { id },
    });
  },
};
