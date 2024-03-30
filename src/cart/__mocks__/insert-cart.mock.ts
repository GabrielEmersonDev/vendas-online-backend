import { productEntityMock } from '../../product/__mocks__/product.mock';
import { InsertCartDto } from '../dtos/insert-cart.dto';
import { cartEntityMock } from './cart.mock';

export const insertCartEntityMock: InsertCartDto = {
  amount: 534,
  productId: productEntityMock.id,
};
