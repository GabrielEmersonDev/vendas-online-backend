import { paymentPixMock } from '../../payment/__mocks__/payment-pix.mock';
import { addressEntityMock } from '../../address/__mocks__/address.mock';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { paymentCreditCardMock } from '../../payment/__mocks__/payment-credit-card.mock';

export const createOrderPixMock: CreateOrderDto = {
  addressId: addressEntityMock.id,
  codePix: paymentPixMock.code,
  datePayment: '2020-01-01',
};

export const createOrderCreditMock: CreateOrderDto = {
  addressId: addressEntityMock.id,
  amountPayments: paymentCreditCardMock.amountPayments,
};
