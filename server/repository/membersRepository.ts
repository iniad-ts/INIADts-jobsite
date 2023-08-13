import type { MemberModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Member } from '@prisma/client';
import { z } from 'zod';

const toMemberModel = (prismaMember: Member): MemberModel => ({
  githubId: prismaMember.githubId,
  displayName: prismaMember.displayName,
  realName: prismaMember.realName,
  graduateYear: z.number().min(2000).max(3000).parse(prismaMember.graduateYear),
  introduction: prismaMember.introduction,
  avatarUrl: prismaMember.avatarUrl,
  links: z.array(z.string()).parse(prismaMember.links),
  products: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      })
    )
    .parse(prismaMember.products),
});

export const membersRepository = {
  save: async (member: MemberModel) => {
    const updatedMember = await prismaClient.member.upsert({
      where: { githubId: member.githubId },
      update: {
        githubId: member.githubId,
        displayName: member.displayName,
        realName: member.realName,
        graduateYear: member.graduateYear,
        introduction: member.introduction,
        avatarUrl: member.avatarUrl,
        links: member.links ?? undefined,
        products: member.products ?? undefined,
      },
      create: {
        githubId: member.githubId,
        displayName: member.displayName,
        realName: member.realName,
        graduateYear: member.graduateYear,
        introduction: member.introduction,
        avatarUrl: member.avatarUrl,
        links: member.links ?? undefined,
        products: member.products ?? undefined,
        createdAt: new Date(),
      },
    });
  },
  getUnique: async (githubId: string) => {
    const member = await prismaClient.member.findUnique({
      where: { githubId },
    });

    return member !== null ? toMemberModel(member) : null;
  },
  getAll: async () => {
    const members = await prismaClient.member.findMany();
    return members.map(toMemberModel);
  },
};
