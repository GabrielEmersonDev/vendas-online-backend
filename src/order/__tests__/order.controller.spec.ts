import { Test, TestingModule } from '@nestjs/testing';
import { userEntityMock } from '../../user/__mocks__/user.mock';
import { OrderController } from '../order.controller';
import { OrderService } from '../order.service';
import { orderEntityMock } from '../__mocks__/order.mock';

describe('OrderController', () => {
  let controller: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: {
            createOrder: jest.fn().mockResolvedValue(orderEntityMock),
            findOrdersByUserId: jest.fn().mockResolvedValue([orderEntityMock]),
            findAllOrders: jest.fn().mockResolvedValue([orderEntityMock]),
          },
        },
      ],
      controllers: [OrderController],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(orderService).toBeDefined();
  });

  it('should return orders in findOrdersByUserId', async () => {
    const orders = await controller.findOrdersByUserId(userEntityMock.id);

    expect(orders).toEqual([orderEntityMock]);
  });

  it('should return orders in findAllOrders', async () => {
    const spy = jest.spyOn(orderService, 'findAllOrders');
    const orders = await controller.findAllOrders();

    expect(orders).toEqual([
      {
        id: orderEntityMock.id,
        date: orderEntityMock.date.toString(),
        userId: orderEntityMock.userId,
        addressId: orderEntityMock.addressId,
        paymentId: orderEntityMock.paymentId,
      },
    ]);
    expect(spy.mock.calls.length).toEqual(1);
  });

  it('should return orders in findOrderById', async () => {
    const spy = jest.spyOn(orderService, 'findOrdersByUserId');
    const orders = await controller.findOrderById(orderEntityMock.id);

    expect(orders).toEqual({
      id: orderEntityMock.id,
      date: orderEntityMock.date.toString(),
      userId: orderEntityMock.userId,
      addressId: orderEntityMock.addressId,
      paymentId: orderEntityMock.paymentId,
    });
    expect(spy.mock.calls.length).toEqual(1);
  });
});
