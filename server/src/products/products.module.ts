import { Module } from '@nestjs/common';

import { ListProductsRepositoryMeli } from '@/products/repositories/impl/list-products.repository.meli';
import { ListProductsRepository } from '@/products/repositories/list-products.repository';
import { ListProductsController } from '@/products/controllers/list-products.controller';
import { ListProductsService } from '@/products/services/list-products.service';

import { ListCategoriesRepositoryMeli } from '@/products/repositories/impl/list-categories.repository.meli';
import { ListCategoriesRepository } from '@/products/repositories/list-categories.repository';
import { ListCategoriesController } from '@/products/controllers/list-categories.controller';
import { ListCategoriesService } from '@/products/services/list-categories.service';

@Module({
  controllers: [ListProductsController, ListCategoriesController],
  providers: [
    ListProductsService,
    { provide: ListProductsRepository, useClass: ListProductsRepositoryMeli },
    ListCategoriesService,
    {
      provide: ListCategoriesRepository,
      useClass: ListCategoriesRepositoryMeli,
    },
  ],
})
export class ProductsModule {}
