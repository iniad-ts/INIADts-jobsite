import { z } from 'zod';
import type { EnemyId, TaskId, UserId } from '../commonTypesWithClient/branded';

export const userIdParser: z.ZodType<UserId> = z.string().brand<'UserId'>();

export const taskIdParser: z.ZodType<TaskId> = z.string().brand<'TaskId'>();

export const EnemyIdParser: z.ZodType<EnemyId> = z.string().brand<'EnemyId'>();
