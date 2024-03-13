import { LoginPayload } from 'src/auth/dtos/loginPayload.dto';

export const authorizationToLoginPayLoad = (
  authorization: string,
): LoginPayload => {
  const authorizationSplited = authorization.split('.');

  if (authorizationSplited.length !== 3) {
    return undefined;
  }

  return JSON.parse(
    Buffer.from(authorizationSplited[1], 'base64').toString('ascii'),
  );
};
