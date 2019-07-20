import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
    <div ngClass="{{class}}"><h3>{{title}}</h3></div>`,
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  class = "item widget";

  constructor() {
  }

  ngOnInit() {
  }

}
