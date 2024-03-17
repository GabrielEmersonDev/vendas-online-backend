import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dto/create-product.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  name: 'Product 1',
  price: 100,
  image: 'image.jpg',
};
