import { Configuration, DefaultApi } from '../../../api-cli';
import { NEXT_PUBLIC_API_BASE_URL } from '../env';

export function getAuthnApiClient(args: { idToken: string }): DefaultApi {
  const apiClient = new DefaultApi(
    new Configuration({
      basePath: NEXT_PUBLIC_API_BASE_URL,
      baseOptions: {
        headers: {
          Authorization: `Bearer ${args.idToken}`,
        },
      },
    }),
  );

  return apiClient;
}

export function getDefaultApiClient(): DefaultApi {
  const apiClient = new DefaultApi(
    new Configuration({
      basePath: NEXT_PUBLIC_API_BASE_URL,
    }),
  );

  return apiClient;
}
