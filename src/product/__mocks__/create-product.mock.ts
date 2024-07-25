import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  name: 'Product 1',
  price: 100,
  image: 'image.jpg',
  weight: 10,
  length: 10,
  height: 10,
  width: 10,
  diameter: 10,
};
