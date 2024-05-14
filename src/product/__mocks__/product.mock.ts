import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productEntityMock: ProductEntity = {
  categoryId: categoryMock.id,
  createdAt: new Date(),
  id: 124,
  image: 'http://image.com',
  name: 'Product 1',
  price: 34.3,
  updatedAt: new Date(),
};
