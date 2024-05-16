import { paymentMock } from '../../payment/__mocks__/payment.mock';
import { addressEntityMock } from '../../address/__mocks__/address.mock';
import { OrderEntity } from '../entities/order.entity';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const orderEntityMock: OrderEntity = {
  addressId: addressEntityMock.id,
  createdAt: new Date(),
  date: new Date(),
  id: 453543,
  paymentId: paymentMock.id,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
