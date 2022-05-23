export class Category {
  public readonly id: string;
  public readonly name?: string;

  constructor({ id, name }: Category) {
    this.id = id;
    this.name = name;
  }
}
