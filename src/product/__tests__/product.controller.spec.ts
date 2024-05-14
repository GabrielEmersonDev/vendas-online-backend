import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../product.controller';
import { ProductService } from '../product.service';
import { createProductMock } from '../__mocks__/create-product.mock';
import { productEntityMock } from '../__mocks__/product.mock';

import { updateProductMock } from '../__mocks__/update-product.mock';
import { returnDeleteMock } from '../../__mocks__/return-delete.mock';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([productEntityMock]),
            createProduct: jest.fn().mockResolvedValue(productEntityMock),
            deleteProduct: jest.fn().mockResolvedValue(returnDeleteMock),
            updateProduct: jest.fn().mockResolvedValue(productEntityMock),
          },
        },
      ],
      controllers: [ProductController],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(productService).toBeDefined();
  });

  it('should product Entity in findAll', async () => {
    const products = await controller.findAll();

    expect(products).toEqual([
      {
        id: productEntityMock.id,
        name: productEntityMock.name,
        price: productEntityMock.price,
        image: productEntityMock.image,
      },
    ]);
  });

  it('should product Entity in createProduct', async () => {
    const product = await controller.createProduct(createProductMock);

    expect(product).toEqual(productEntityMock);
  });

  it('should delete Entity in deleteProduct', async () => {
    const product = await controller.deleteProduct(productEntityMock.id);

    expect(product).toEqual(returnDeleteMock);
  });

  it('should return ProductEntity in updateProduct', async () => {
    const product = await controller.updateProduct(
      updateProductMock,
      productEntityMock.id,
    );

    expect(product).toEqual(productEntityMock);
  });
});
