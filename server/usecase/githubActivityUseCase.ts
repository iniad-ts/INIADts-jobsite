import { GITHUB_API_ORIGIN, GITHUB_USERNAME, S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { GetObjectCommand, ListObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

export type GithubActivity = {
  total: Record<string, number>;
  contributions: Array<{
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }>;
};

const uploadActivity = async (userName: string, data: string) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: `github-activity/${userName}/${new Date().toISOString()}.json`,
    Body: data,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
  } catch (err) {
    console.error(err);
  }
};

const fetchActivity = async (userId: string): Promise<GithubActivity | null> => {
  const res = await fetch(`${GITHUB_API_ORIGIN}/v4/${userId}?y=last`);
  const data: GithubActivity = await res.json();

  if (data !== null) {
    const jsonString: string = JSON.stringify(data);
    uploadActivity(userId, jsonString);
    return data;
  }

  return null;
};

const fetchAllActivity = () => {
  GITHUB_USERNAME.map((userName) => fetchActivity(userName));
};

const getLatestActivity = async (userId: string): Promise<GithubActivity | null> => {
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
      const data: GithubActivity = JSON.parse(dataString ?? '{}');

      return data;
    }

    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const githubActivityUseCase = {
  fetchActivity,
  fetchAllActivity,
  getLatestActivity,
};
