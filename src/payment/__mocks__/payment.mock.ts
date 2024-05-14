import { PaymentType } from '../../payment-status/enums/payment-type.enum';
import { PaymentEntity } from '../entities/payment.entity';

export const paymentMock: PaymentEntity = {
  createdAt: new Date(),
  discount: 10,
  finalPrice: 90,
  id: 1203,
  price: 81,
  statusId: PaymentType.Done,
  updatedAt: new Date(),
  type: '',
};
