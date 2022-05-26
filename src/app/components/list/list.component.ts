import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Item[] = []; 
  newTaskTitle: string = ''

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() {
    this.itemsService.items$.subscribe(
      items => {
        this.items = items;
      }
    )
  }

  addItem() {
    this.itemsService.addItem(this.newTaskTitle);
  }

}
