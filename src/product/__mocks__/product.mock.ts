import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productEntityMock: ProductEntity = {
  name: 'Product 1',
  price: 34.3,
  createdAt: new Date(),
  updatedAt: new Date(),
  image: 'http://image.com',
  id: 124,
  categoryId: categoryMock.id,
};
