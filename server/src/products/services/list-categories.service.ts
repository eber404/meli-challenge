import { Injectable } from '@nestjs/common';

import { ListCategoriesRepository } from '@/products/repositories/list-categories.repository';
import { Category } from '@/products/entities/category';

@Injectable()
export class ListCategoriesService {
  constructor(private readonly listCategories: ListCategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.listCategories.listCategories();
  }
}
