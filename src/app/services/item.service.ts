import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
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
  ];
  constructor() { }

  getItems(){
    return this.items;
  }

  addItems(element:Item){
    this.items.unshift(element);
  }
}
