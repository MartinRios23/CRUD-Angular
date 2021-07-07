import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  
  id:number = 0;
  titulo:string = "";
  precio:number = 0;
  cantidad:number = 0;

  constructor(private itemService:ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.tittle = this.titulo;
    item.price = this.precio;
    item.quantity = this.cantidad;
    item.completed = false;

    this.itemService.addItems(item);
    this.router.navigate(['/']);
  }
}
