import { GITHUB_API_ORIGIN, S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

export const githubActivityRepository = {
  upload: async (userId: string, data: string): Promise<void> => {
    const params = {
      Bucket: S3_BUCKET,
      Key: `members/${userId}/githubActivity.json`,
      Body: data,
    };

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
};
