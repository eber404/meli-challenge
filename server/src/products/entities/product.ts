import { Category } from './category';

export interface ProductProps {
  image: string;
  title: string;
  price: number;
  liked: boolean;
  stars: number;
  category: Category;
}

export class Product {
  public readonly image: string;
  public readonly title: string;
  public readonly price: number;
  public readonly liked: boolean;
  public readonly stars: number;
  public readonly category: Category;

  constructor(props: ProductProps) {
    this.image = props.image;
    this.title = props.title;
    this.price = props.price;
    this.liked = props.liked;
    this.stars = props.stars;
    this.category = props.category;
  }
}
