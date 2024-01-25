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

export const PORT = readNumber({ name: 'PORT', envVar: process.env.PORT });
export const API_BASE_URL = readString({
  name: 'API_BASE_URL',
  envVar: process.env.API_BASE_URL,
});
export const CLIENT_BASE_URL = readString({
  name: 'CLIENT_BASE_URL',
  envVar: process.env.CLIENT_BASE_URL,
});
export const FIREBASE_PROJECT_ID = readString({
  name: 'FIREBASE_PROJECT_ID',
  envVar: process.env.FIREBASE_PROJECT_ID,
});
