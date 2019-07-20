import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-home',
  template: `
    <!--<div id="container">-->
      <app-item></app-item>
    <!--</div>-->
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemService.all().subscribe(items => {
      this.items = items;
      console.log('items ', items);
    });
  }
}
