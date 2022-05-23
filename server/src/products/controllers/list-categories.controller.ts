import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { ListCategoriesService } from '@/products/services/list-categories.service';

@Controller('products/categories')
export class ListCategoriesController {
  constructor(private readonly listCategoriesService: ListCategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async handle() {
    const categories = await this.listCategoriesService.execute();

    return categories;
  }
}
