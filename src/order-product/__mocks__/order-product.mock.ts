import { orderEntityMock } from '../../order/__mocks__/order.mock';
import { OrderProductEntity } from '../entities/order-product.entity';
import { productEntityMock } from '../../product/__mocks__/product.mock';

export const orderProductMock: OrderProductEntity = {
  amount: 543,
  createdAt: new Date(),
  id: 45543,
  orderId: orderEntityMock.id,
  price: 543.4,
  productId: productEntityMock.id,
  updatedAt: new Date(),
};
