import { userEntityMock } from '../../user/__mocks__/user.mock';
import { ReturnLoginDto } from '../dtos/returnLogin.dto';
import { jwtMock } from './jwt.mock';

export const ReturnLoginMock: ReturnLoginDto = {
  accessToken: jwtMock,
  user: userEntityMock,
};
