import type { MemberModel } from '$/commonTypesWithClient/models';
import { S3_BUCKET } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { s3Client } from '$/service/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';
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
  saveToDB: async (member: MemberModel): Promise<MemberModel | null> => {
    const updatedPrismaMember: Member = await prismaClient.member.upsert({
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

    const updatedMember = toMemberModel(updatedPrismaMember);

    return updatedMember;
  },
  saveToS3: async (member: MemberModel) => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/${member.githubId}/info.json`,
      Body: JSON.stringify(member),
    };

    try {
      const command = new PutObjectCommand(s3Params);
      await s3Client.send(command);
    } catch (err) {
      console.error(err);
    }
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
