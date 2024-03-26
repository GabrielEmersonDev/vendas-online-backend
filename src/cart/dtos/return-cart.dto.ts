import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { CartEntity } from '../entities/cart.entity';

export class ReturnCartDto {
  id: number;

  cartProduct?: CartProductEntity[];

  constructor(cart: CartEntity) {
    this.id = cart.id;
    this.cartProduct = cart.cartProduct;
  }
}
