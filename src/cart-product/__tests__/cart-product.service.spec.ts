import { Test, TestingModule } from '@nestjs/testing';
import { CartProductService } from '../cart-product.service';
import { CartProductEntity } from '../entities/cart-product.entity';
import { ProductService } from '../../product/product.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { productEntityMock } from '../../product/__mocks__/product.mock';
import { returnDeleteMock } from '../../__mocks__/return-delete.mock';
import { cartEntityMock } from '../../cart/__mocks__/cart.mock';
import { insertCartEntityMock } from '../../cart/__mocks__/insert-cart.mock';
import { cartProductEntityMock } from '../__mocks__/product-cart.mock';
import { NotFoundException } from '@nestjs/common';
import { updateCartEntityMock } from '../../cart/__mocks__/update-cart.moc';

describe('CartProductService', () => {
  let service: CartProductService;
  let productService: ProductService;
  let cartProductRepository: Repository<CartProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: {
            findProductById: jest.fn().mockResolvedValue(productEntityMock),
          },
        },
        {
          provide: getRepositoryToken(CartProductEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(cartProductEntityMock),
            save: jest.fn().mockResolvedValue(cartProductEntityMock),
            delete: jest.fn().mockResolvedValue(returnDeleteMock),
          },
        },
        CartProductService,
      ],
    }).compile();

    service = module.get<CartProductService>(CartProductService);
    productService = module.get<ProductService>(ProductService);
    cartProductRepository = module.get<Repository<CartProductEntity>>(
      getRepositoryToken(CartProductEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(productService).toBeDefined();
    expect(cartProductRepository).toBeDefined();
  });

  it('Should return delete Result after delete product', async () => {
    const deleteResult = await service.deleteProductCart(
      productEntityMock.id,
      cartEntityMock.id,
    );

    expect(deleteResult).toEqual(returnDeleteMock);
  });

  it('Should return error in exception delete ', async () => {
    jest.spyOn(cartProductRepository, 'delete').mockRejectedValue(new Error());

    expect(
      service.deleteProductCart(productEntityMock.id, cartEntityMock.id),
    ).rejects.toThrow();
  });

  it('Should return CartProduct after create', async () => {
    const cartProduct = await service.createCartProductInCart(
      insertCartEntityMock,
      cartEntityMock.id,
    );

    expect(cartProduct).toEqual(cartProductEntityMock);
  });

  it('Should return error in save product in cart', async () => {
    jest.spyOn(cartProductRepository, 'save').mockRejectedValue(new Error());

    expect(
      service.createCartProductInCart(insertCartEntityMock, cartEntityMock.id),
    ).rejects.toThrow();
  });

  it('Should return cartProduct if exist', async () => {
    const cartProduct = await service.verifyProductInCart(
      productEntityMock.id,
      cartEntityMock.id,
    );

    expect(cartProduct).toEqual(cartProductEntityMock);
  });

  it('Should return error if not found verifyProductInCart', async () => {
    jest.spyOn(cartProductRepository, 'findOne').mockResolvedValue(undefined);

    expect(
      service.verifyProductInCart(productEntityMock.id, cartEntityMock.id),
    ).rejects.toThrow(NotFoundException);
  });

  it('Should return error in exception verifyProductInCart', async () => {
    jest.spyOn(cartProductRepository, 'findOne').mockRejectedValue(new Error());

    expect(
      service.verifyProductInCart(productEntityMock.id, cartEntityMock.id),
    ).rejects.toThrow(Error);
  });

  it('Should return error in exception insertProductInCart', async () => {
    jest
      .spyOn(productService, 'findProductById')
      .mockRejectedValue(new NotFoundException());

    expect(
      service.insertProductInCart(insertCartEntityMock, cartEntityMock),
    ).rejects.toThrow(NotFoundException);
  });

  it('Should return cart product if not exist cart (updateCartEntityMock)', async () => {
    const spy = jest.spyOn(cartProductRepository, 'save');

    jest.spyOn(cartProductRepository, 'findOne').mockResolvedValue(undefined);

    const cartProduct = await service.insertProductInCart(
      insertCartEntityMock,
      cartEntityMock,
    );

    expect(cartProduct).toEqual(cartProductEntityMock);
    expect(spy.mock.calls[0][0].amount).toEqual(insertCartEntityMock.amount);
  });

  it('Should return cart product if not exist cart (updateCartEntityMock)', async () => {
    const spy = jest.spyOn(cartProductRepository, 'save');

    const cartProduct = await service.insertProductInCart(
      insertCartEntityMock,
      cartEntityMock,
    );

    expect(cartProduct).toEqual(cartProductEntityMock);
    expect(spy.mock.calls[0][0]).toEqual({
      ...cartProductEntityMock,
      amount: cartProductEntityMock.amount + insertCartEntityMock.amount,
    });
  });

  //

  it('Should return error in exception updateProductInCart', async () => {
    jest
      .spyOn(productService, 'findProductById')
      .mockRejectedValue(new NotFoundException());

    expect(
      service.updateProductInCart(updateCartEntityMock, cartEntityMock),
    ).rejects.toThrow(NotFoundException);
  });

  it('Should return cart product if not exist cart', async () => {
    jest.spyOn(cartProductRepository, 'findOne').mockResolvedValue(undefined);

    expect(
      service.updateProductInCart(updateCartEntityMock, cartEntityMock),
    ).rejects.toThrow(NotFoundException);
  });

  it('Should return cart product if not exist cart', async () => {
    const spy = jest.spyOn(cartProductRepository, 'save');

    const cartProduct = await service.updateProductInCart(
      updateCartEntityMock,
      cartEntityMock,
    );

    expect(cartProduct).toEqual(cartProductEntityMock);
    expect(spy.mock.calls[0][0].amount).toEqual(updateCartEntityMock.amount);
  });
});
