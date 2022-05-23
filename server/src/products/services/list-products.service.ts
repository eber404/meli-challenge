import { Injectable } from '@nestjs/common';

import { ListProductsRepository } from '@/products/repositories/list-products.repository';
import { Product } from '@/products/entities/product';
import { ListProductsDTO } from '@/products/dtos/list-products.dto';

@Injectable()
export class ListProductsService {
  constructor(private readonly productsRepository: ListProductsRepository) {}

  async execute(dto: ListProductsDTO): Promise<Product[]> {
    return await this.productsRepository.listProducts(dto);
  }
}
