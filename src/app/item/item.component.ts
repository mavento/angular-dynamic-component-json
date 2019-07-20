import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SimpleComponent} from "./simple/simple.component";
import {FeatureComponent} from "./feature/feature.component";
import {ItemService} from "../service/item.service";
import {UnrecognizedComponent} from "./unrecognized/unrecognized.component";
import {WidgetComponent} from "./widget/widget.component";
import {DynamicComponent} from "./dynamic/dynamic.component";

@Component({
  selector: 'app-item',
  template: `
    <div id="container">
      <div #appitem></div>
    </div>`,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @ViewChild('appitem', {static: true, read: ViewContainerRef}) appitem: ViewContainerRef;

  private componentRef: ComponentRef<{}>;

  private mappings = {
    'simple': SimpleComponent,
    'feature': FeatureComponent,
    'widget': WidgetComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.itemService.all().subscribe(items => {
      for (const item of items) {
        if (!item.hidden) {
          let componentType = this.getType(item.type);
          let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
          this.componentRef = this.appitem.createComponent(factory);
          // set title
          let instance = <DynamicComponent>this.componentRef.instance;
          instance.title = item.title;
        }
      }
    });

  }

  getType(typeName: string) {
    let type = this.mappings[typeName];
    return type || UnrecognizedComponent;
  }


}
