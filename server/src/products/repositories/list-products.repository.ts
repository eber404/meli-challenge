import { Product } from '@/products/entities/product';
import { ListProductsDTO } from '@/products/dtos/list-products.dto';

export abstract class ListProductsRepository {
  abstract listProducts(props?: ListProductsDTO): Promise<Product[]>;
}
