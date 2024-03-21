import { UpdateUserPasswordDto } from '../dtos/UpdateUserPassword.dto';

export const updatePasswordMock: UpdateUserPasswordDto = {
  oldPassword: 'abc',
  newPassword: 'def',
};

export const updatePasswordInvalidMock: UpdateUserPasswordDto = {
  oldPassword: '4234',
  newPassword: 'd12312',
};
