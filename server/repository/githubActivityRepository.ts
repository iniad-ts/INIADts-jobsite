import type { GitHubActivityModel } from '$/commonTypesWithClient/models';
import { GITHUB_API_ORIGIN, S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { GetObjectCommand, ListObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

export const githubActivityRepository = {
  upload: async (userId: string, data: string): Promise<void> => {
    const params = {
      Bucket: S3_BUCKET,
      Key: `github-activity/${userId}/${new Date().toISOString()}.json`,
      Body: data,
    };

    console.log(params);

    try {
      const command = new PutObjectCommand(params);
      await s3Client.send(command);
    } catch (err) {
      console.error(err);
    }
  },
  fetchData: async (userId: string): Promise<string | undefined> => {
    try {
      const res = await fetch(`${GITHUB_API_ORIGIN}/v4/${userId}?y=last`);
      return await res.text();
    } catch (err) {
      console.error(err);
    }
  },
  getLatest: async (userId: string): Promise<GitHubActivityModel | null> => {
    const params = {
      Bucket: S3_BUCKET,
      Prefix: `github-activity/${userId}/`,
    };

    try {
      const command = new ListObjectsCommand(params);
      const { Contents } = await s3Client.send(command);

      if (Contents !== undefined) {
        const latestObjectKey = Contents[0].Key;
        const latestObjectParams = {
          Bucket: S3_BUCKET,
          Key: latestObjectKey,
        };

        const latestObjectCommand = new GetObjectCommand(latestObjectParams);
        const res = await s3Client.send(latestObjectCommand);
        const dataString = await res.Body?.transformToString();
        const data: GitHubActivityModel = { ...JSON.parse(dataString ?? '{}'), userId };

        return data;
      }

      return null;
    } catch (err) {
      console.error(err);
      return null;
    }
  },
};
