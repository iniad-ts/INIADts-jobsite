require('dotenv').config({ path: '../server/.env' });

module.exports = [
  {
    input: '../server/api',
    baseURL: `${process.env.API_ORIGIN ?? ''}${process.env.API_BASE_PATH ?? ''}`,
  },
  {
    input: './src/api',
    baseURL: `${process.env.S3_PUBLIC_ENDPOINT ?? ''}/${process.env.S3_BUCKET ?? ''}/`,
  },
];
