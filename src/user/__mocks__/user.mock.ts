import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '12345678901',
  createdAt: new Date(),
  email: 'usuario@teste.com',
  id: 1,
  name: 'Nome do Usuário',
  password: 'senha123',
  phone: '123456789',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
