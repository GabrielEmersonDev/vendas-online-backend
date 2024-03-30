import { cartEntityMock } from '../../cart/__mocks__/cart.mock';
import { CartProductEntity } from '../entities/cart-product.entity';
import { productEntityMock } from '../../product/__mocks__/product.mock';

export const cartProductEntityMock: CartProductEntity = {
  amount: 534,
  cartId: cartEntityMock.id,
  createdAt: new Date(),
  id: 12312,
  productId: productEntityMock.id,
  updatedAt: new Date(),
};
