import type { MemberModel } from '$/commonTypesWithClient/models';
import { S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { GetObjectCommand, ListObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

export const membersRepository = {
  upsert: async (memberInfo: MemberModel) => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/${memberInfo.githubId}.json`,
      Body: JSON.stringify(memberInfo),
    };

    try {
      const s3Command = new PutObjectCommand(s3Params);
      await s3Client.send(s3Command);
    } catch (err) {
      console.error(err);
    }
  },
  getMemberList: async () => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Prefix: 'members/',
    };

    try {
      const s3Command = new ListObjectsCommand(s3Params);
      const { Contents } = await s3Client.send(s3Command);

      if (Contents === undefined) return [];

      const memberList = Contents.map(({ Key }) => {
        const githubId = (Key ?? '').split('/')[1].split('.')[0];
        return githubId;
      });

      return memberList;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  getMember: async (githubId: string): Promise<MemberModel | null> => {
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: `members/${githubId}.json`,
    };

    try {
      const s3Command = new GetObjectCommand(s3Params);
      const s3Response = await s3Client.send(s3Command);

      if (s3Response.Body === undefined) return null;

      const memberInfoString = await s3Response.Body.transformToString();
      const memberInfo: MemberModel = JSON.parse(memberInfoString);

      return memberInfo;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
};
