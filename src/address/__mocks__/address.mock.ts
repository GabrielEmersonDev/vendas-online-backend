import { cityEntityMock } from '../../city/__mocks__/city.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressEntityMock: AddressEntity = {
  id: 123123,
  userId: userEntityMock.id,
  complement: 'Teste',
  numberAddress: 154,
  cep: '12345678',
  cityId: cityEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
