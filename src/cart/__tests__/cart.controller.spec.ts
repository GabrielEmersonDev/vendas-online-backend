import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from '../cart.controller';
import { CartService } from '../cart.service';
import { insertCartEntityMock } from '../__mocks__/insert-cart.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cartEntityMock } from '../__mocks__/cart.mock';
import { returnDeleteMock } from '../../__mocks__/return-delete.mock';
import { updateCartEntityMock } from '../__mocks__/update-cart.moc';

describe('CartController', () => {
  let controller: CartController;
  let cartService: CartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: CartService,
          useValue: {
            insertProductInCart: jest.fn().mockResolvedValue(cartEntityMock),
            findCartByUserId: jest.fn().mockResolvedValue(cartEntityMock),
            clearCart: jest.fn().mockResolvedValue(returnDeleteMock),
            updateProductInCart: jest.fn().mockResolvedValue(cartEntityMock),
          },
        },
      ],
      controllers: [CartController],
    }).compile();

    controller = module.get<CartController>(CartController);
    cartService = module.get<CartService>(CartService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(cartService).toBeDefined();
  });

  it('Should return Entity in insertProductInCart', async () => {
    const cart = await controller.createCart(
      insertCartEntityMock,
      userEntityMock.id,
    );
    expect(cart).toEqual({
      id: cartEntityMock.id,
    });
  });

  it('Should return Entity in insertProductInCart', async () => {
    const cart = await controller.findCartByUserId(userEntityMock.id);
    expect(cart).toEqual({
      id: cartEntityMock.id,
    });
  });

  it('Should return deleteResult in clearCart', async () => {
    const cart = await controller.clearCart(userEntityMock.id);
    expect(cart).toEqual(returnDeleteMock);
  });

  it('Should return Entity in updateProductInCart', async () => {
    const cart = await controller.updateProductInCart(
      updateCartEntityMock,
      userEntityMock.id,
    );
    expect(cart).toEqual({
      id: cartEntityMock.id,
    });
  });
});
