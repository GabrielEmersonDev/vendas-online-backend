import { productEntityMock } from '../../product/__mocks__/product.mock';
import { UpdateCartDto } from '../dtos/update-cart.dto';

export const updateCartEntityMock: UpdateCartDto = {
  amount: 53413,
  productId: productEntityMock.id,
};
