import { Controller, Get, Query, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { ListProductsService } from '@/products/services/list-products.service';

@Controller('products')
export class ListProductsController {
  constructor(private readonly listProductsService: ListProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async handle(@Query() query) {
    const products = await this.listProductsService.execute({
      category: query.category,
      query: query.q,
    });

    return products;
  }
}
