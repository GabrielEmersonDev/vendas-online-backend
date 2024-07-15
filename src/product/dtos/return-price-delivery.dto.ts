import { ResponsePriceCorreios } from 'src/correios/dtos/response-price-correios';

interface ReturnDelivery {
  deliveryTime: number;
  deliveryPrice: number;
  typeDelivery: number;
}

export class ReturnPriceDeliveryDTO {
  delivery: ReturnDelivery[];

  constructor(priceCorreios: ResponsePriceCorreios[]) {
    this.delivery = priceCorreios
      .filter(
        (priceCorreio) =>
          priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Erro ===
          '0',
      )
      .map((priceCorreio) => ({
        deliveryPrice: Number(
          priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Valor.replace(
            ',',
            '.',
          ),
        ),
        deliveryTime: Number(
          priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]
            ?.PrazoEntrega,
        ),
        typeDelivery:
          priceCorreio.CalcPrecoPrazoResult?.Servicos?.cServico[0]?.Codigo,
      }));
  }
}