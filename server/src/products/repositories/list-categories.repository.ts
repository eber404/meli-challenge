import { Category } from '@/products/entities/category';

export abstract class ListCategoriesRepository {
  abstract listCategories(): Promise<Category[]>;
}
