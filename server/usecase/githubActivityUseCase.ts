import {
  GITHUB_API_ORIGIN,
  GITHUB_USERNAME,
  S3_ACCESS_KEY,
  S3_ENDPOINT,
  S3_PORT,
  S3_SECRET_KEY,
} from '$/service/envValues';
import * as Minio from 'minio';

const s3Client = new Minio.Client({
  endPoint: S3_ENDPOINT,
  port: S3_PORT,
  useSSL: false,
  accessKey: S3_ACCESS_KEY,
  secretKey: S3_SECRET_KEY,
});

const uploadActivity = async (userName: string, data: string) => {
  const currentDate = new Date().toISOString();
  s3Client.putObject('app', `github-activity/${userName}/${currentDate}.json`, data);
};

const fetchActivity = async (userName: string) => {
  const response = await fetch(`${GITHUB_API_ORIGIN}v4/${userName}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error);
  }

  const jsonString = JSON.stringify(data);
  await uploadActivity(userName, jsonString);
};

const fetchAllActivity = () => GITHUB_USERNAME.forEach(fetchActivity);

export const githubActivityUseCase = {
  fetchAllActivity,
};
