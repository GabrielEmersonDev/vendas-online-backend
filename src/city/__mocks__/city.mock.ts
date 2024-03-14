import { stateEntityMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityEntityMock: CityEntity = {
  id: 533123,
  stateId: stateEntityMock.id,
  name: 'São Paulo',
  createdAt: new Date(),
  updatedAt: new Date(),
};
