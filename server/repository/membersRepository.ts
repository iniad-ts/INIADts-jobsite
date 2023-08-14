import type { MemberList, MemberModel } from '$/commonTypesWithClient/models';
import { S3_BUCKET } from '$/service/envValues';
import { prismaClient } from '$/service/prismaClient';
import { s3Client } from '$/service/s3Client';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import type { Member } from '@prisma/client';
import { z } from 'zod';

const toMemberModel = (prismaMember: Member): MemberModel => ({
  githubId: prismaMember.githubId,
  userName: prismaMember.userName,
  displayName: prismaMember.displayName,
  realName: prismaMember.realName,
  graduateYear: z.number().min(2000).max(3000).parse(prismaMember.graduateYear),
  introduction: prismaMember.introduction ?? undefined,
  avatarUrl: prismaMember.avatarUrl ?? undefined,
  socialLinks: z.array(z.string()).parse(prismaMember.socialLinks),
  products: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
      })
    )
    .parse(prismaMember.products),
  updateAt: prismaMember.updatedAt.getTime(),
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
        socialLinks: member.socialLinks,
        products: member.products,
        updatedAt: new Date(),
      },
      create: {
        githubId: member.githubId,
        userName: member.userName,
        displayName: member.displayName,
        realName: member.realName,
        graduateYear: member.graduateYear,
        introduction: member.introduction,
        avatarUrl: member.avatarUrl,
        socialLinks: member.socialLinks,
        products: member.products,
        createdAt: new Date(),
        updatedAt: new Date(),
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
  saveListToS3: async (memberList: MemberList) => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/memberList.json`,
      Body: JSON.stringify(memberList),
    };

    try {
      const command = new PutObjectCommand(s3Params);
      await s3Client.send(command);
    } catch (err) {
      console.error(err);
    }
  },
  getFromDB: async (githubId: string) => {
    const member = await prismaClient.member.findUnique({
      where: { githubId },
    });

    return member !== null ? toMemberModel(member) : null;
  },
  getFromS3: async (githubId: string) => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/${githubId}/info.json`,
    };

    try {
      const command = new GetObjectCommand(s3Params);
      const res = await s3Client.send(command);
      const resString = await res.Body?.transformToString();

      if (resString === undefined) return null;

      const member: MemberModel = JSON.parse(resString);

      return member;
    } catch (err) {
      console.error(err);

      return null;
    }
  },
  getAllFromDB: async () => {
    const members = await prismaClient.member.findMany();
    return members.map(toMemberModel);
  },
  getListFromS3: async () => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/memberList.json`,
    };

    try {
      const command = new GetObjectCommand(s3Params);
      const res = await s3Client.send(command);
      const resString = await res.Body?.transformToString();

      if (resString === undefined) return null;

      const memberList: MemberList = JSON.parse(resString);

      return memberList;
    } catch (err) {
      console.error(err);

      return null;
    }
  },
};
