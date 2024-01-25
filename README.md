# Ultimate Template (Firebase)

## Description
A template with React.js (Next.js) on the frontend and Nest.js on the backend, using Firebase for authentication. Frontend API client is generated using OpenAPI.

## Features
- React.js (Next.js) frontend
- Nest.js backend
- Firebase authentication
- OpenAPI schema generation
- API client generation

## Setup

1. Install the dependencies
```bash
cd apps/web && yarn install
cd ../..
cd apps/api && yarn install
cd ../..
```

1. Copy and fill out the .env files
```bash
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
```

Fill out the .env files with the correct values.

3. Start the server first to generate the OpenAPI schema
```bash
cd apps/api && yarn dev
cd ../..
```

4. Generate the API client
```bash
cd apps/web && yarn generate:api
cd ../..
```

5. Start the client
```bash
cd apps/web && yarn dev
```
