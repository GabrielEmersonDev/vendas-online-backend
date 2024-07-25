import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDto } from '../dtos/update-product.dto';

export const updateProductMock: UpdateProductDto = {
  categoryId: categoryMock.id,
  name: 'name mock product',
  price: 125,
  image: 'adasdasdji',
  weight: 10,
  length: 10,
  height: 10,
  width: 10,
  diameter: 10,
};
