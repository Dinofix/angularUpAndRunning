export class Stock {
  favorite: boolean = false;

  constructor(
    public name: string = '',
    public code: string = '',
    public price: number = 0,
    public previousPrice: number = 0
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
