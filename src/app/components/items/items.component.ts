import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        tittle: "Manzana",
        price: 20,
        quantity: 10,
        completed: false
      },
      {
        id: 2,
        tittle: "Naranjas",
        price: 15,
        quantity: 35,
        completed: false
      },
      {
        id: 3,
        tittle: "Peras",
        price: 30,
        quantity: 25,
        completed: true
      },
      {
        id: 4,
        tittle: "Uvas",
        price: 8,
        quantity: 50,
        completed: false
      }
    ]

    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id != item.id)
    this.getTotal();
  }

  toggleItem(item: Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                .filter(x => !x.completed)
                .map(x => x.quantity * x.price)
                .reduce((acc, item) => acc += item,0);
  }
}
