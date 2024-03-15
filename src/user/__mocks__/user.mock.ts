import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12345678901',
  createdAt: new Date(),
  email: 'testeNewUser@gmail.com',
  id: 1,
  name: 'Nome do Usuário',
  password: '$2b$10$M7FOezhbYgRAafj5rl.joe3UhHcWyZftuf79cst7AaFadwvIV5.Ga',
  phone: '123456789',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
