import { GITHUB_API_ORIGIN, GITHUB_USERNAME, S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { GetObjectCommand, ListObjectsCommand, PutObjectCommand } from '@aws-sdk/client-s3';

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

const fetchActivity = async (userId: string) => {
  const res = await fetch(`${GITHUB_API_ORIGIN}v4/${userId}`);
  const data = await res.json();

  if (data !== null) {
    const jsonString = JSON.stringify(data);
    uploadActivity(userId, jsonString);
  }
};

const fetchAllActivity = () => {
  GITHUB_USERNAME.map((userName) => fetchActivity(userName));
};

const getLatestActivity = async (userId: string) => {
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
      const { Body } = await s3Client.send(latestObjectCommand);

      const data = JSON.parse((Body ?? '').toString());
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

export const githubActivityUseCase = {
  fetchAllActivity,
  getLatestActivity,
};
