import dotenv from 'dotenv';

dotenv.config({
  path: `${__dirname}/../../../.env`,
});

function readString(args: { name: string; envVar?: string }): string {
  if (!args.envVar) throw new Error(`Missing environment variable ${args.name}`);

  return args.envVar;
}

function readNumber(args: { name: string; envVar?: string }): number {
  if (!args.envVar) throw new Error(`Missing environment variable ${args.name}`);

  const parsedEnvVar = Number(args.envVar);

  if (Number.isNaN(parsedEnvVar)) throw new Error(`Invalid environment variable ${args.name}`);

  return parsedEnvVar;
}

export const NEXT_PUBLIC_API_BASE_URL = readString({
  name: 'NEXT_PUBLIC_API_BASE_URL',
  envVar: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const NEXT_PUBLIC_FIREBASE_API_KEY = readString({
  name: 'NEXT_PUBLIC_FIREBASE_API_KEY',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
});

export const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = readString({
  name: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
});

export const NEXT_PUBLIC_FIREBASE_PROJECT_ID = readString({
  name: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

export const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = readString({
  name: 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
});

export const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = readString({
  name: 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
});

export const NEXT_PUBLIC_FIREBASE_APP_ID = readString({
  name: 'NEXT_PUBLIC_FIREBASE_APP_ID',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

export const NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = readString({
  name: 'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID',
  envVar: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});
