import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

interface Props {
  statusCode: number;
}

type ErrorCodes = 400 | 404 | 405 | 500;

const errorCodes = [400, 404, 405, 500];

const errorMessages = {
  400: 'Bad Request',
  404: 'Not Found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
  other: 'Error',
};

const isError = (statusCode: number): statusCode is ErrorCodes => errorCodes.includes(statusCode);
const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: 'var(--color-fg-main)',
      }}
    >
      <Head>
        <title>
          {statusCode} | {errorMessages[isError(statusCode) ? statusCode : 'other']}
        </title>
      </Head>
      <p
        style={{
          textDecorationLine: 'underline',
          textDecorationColor: 'var(--color-error)',
          textDecorationStyle: 'wavy',
          textDecorationThickness: 2,
        }}
      >
        {statusCode} {errorMessages[isError(statusCode) ? statusCode : 'other']};
      </p>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
