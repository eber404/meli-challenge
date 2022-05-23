import axios, { AxiosInstance } from 'axios';

import * as produtMock from '@/products/mocks/product.json';
import { ListProductsRepository } from '@/products/repositories/list-products.repository';
import { Product } from '@/products/entities/product';
import { ListProductsDTO } from '@/products/dtos/list-products.dto';

type ProductDTO = typeof produtMock;

export class ListProductsRepositoryMeli implements ListProductsRepository {
  private readonly http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.mercadolibre.com/sites/MLB',
    });
  }

  private toDomain(dto: ProductDTO): Product {
    return new Product({
      image: dto.thumbnail,
      price: dto.price,
      title: dto.title,
      liked: Math.round(Math.random() * 100) % 2 === 0,
      stars: Math.round(Math.random() * 5),
      category: {
        id: dto.category_id,
      },
    });
  }

  async listProducts(props: ListProductsDTO): Promise<Product[]> {
    const query = props?.query ? `q=${props.query}` : '';
    const category = props?.category ? `category=${props.category}` : '';

    const url = ['/search?', query, category].join('&').replace('&', '');

    const res = await this.http.get(url);

    const products = res.data.results.map((dto) => this.toDomain(dto));

    return products;
  }
}
