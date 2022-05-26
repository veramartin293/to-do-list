import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item:Item = new Item('');
  editMode = false;
  isCompleted = false;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    console.log(this.item.title)
  }

  setEditMode() {
    this.editMode = true;
  }

  saveEditedItem() {
    this.itemsService.edit(this.item);
    this.editMode = false;
  }

  deleteItem() {
    this.itemsService.delete(this.item);
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

}
