import { GITHUB_API_ORIGIN, GITHUB_USERNAME, S3_BUCKET } from '$/service/envValues';
import { s3Client } from '$/service/s3Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

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

const fetchActivity = async (userName: string) => {
  const res = await fetch(`${GITHUB_API_ORIGIN}v4/${userName}`);
  const data = await res.json();

  if (data !== null) {
    const jsonString = JSON.stringify(data);
    uploadActivity(userName, jsonString);
  }
};

const fetchAllActivity = () => {
  GITHUB_USERNAME.map((userName) => fetchActivity(userName));
};

export const githubActivityUseCase = {
  fetchAllActivity,
};
