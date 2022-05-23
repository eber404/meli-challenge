import * as categoriesJSON from '@/products/mocks/categories.json';

import { Category } from '@/products/entities/category';
import { ListCategoriesRepository } from '@/products/repositories/list-categories.repository';

type CategoriesDTO = typeof categoriesJSON;

export class ListCategoriesRepositoryMeli implements ListCategoriesRepository {
  private toDomain(categoriesDTO: CategoriesDTO): Category[] {
    const categories = categoriesDTO.map(
      (dto) => new Category({ id: dto.id, name: dto.name }),
    );

    return categories;
  }

  async listCategories(): Promise<Category[]> {
    const categories = this.toDomain(categoriesJSON);

    return categories;
  }
}
