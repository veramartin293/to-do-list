import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items:Item[] = [
    new Item('Task 0'),
  ]

  private itemsSource = new BehaviorSubject<Item[]>(this.getItems());
  items$ = this.itemsSource.asObservable();

  constructor() { }

  private getItems() {
    return this.items.map((el:Item) => Object.assign({}, el));
  }

  addItem(itemTitle: string) {
    const item = new Item(itemTitle)
    this.items.unshift(item);
    this.itemsSource.next(this.getItems());
  }

  edit(item: Item) {
    const itemIdx = this.items.findIndex(el => el.id === item.id);
    this.items[itemIdx].title = item.title;
  }

  delete(item: Item) {
    this.items = this.items.filter((el => {
      return el.id !== item.id
    }))
    this.itemsSource.next(this.getItems());
  }
}
