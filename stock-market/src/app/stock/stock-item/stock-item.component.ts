import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css',
})
export class StockItemComponent implements OnInit {
  public stock: Stock = new Stock();

  constructor() {}

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event: any) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
