import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ItemComponent} from './item/item.component';
import {SimpleComponent} from './item/simple/simple.component';
import {FeatureComponent} from './item/feature/feature.component';
import {UnrecognizedComponent} from './item/unrecognized/unrecognized.component';
import {WidgetComponent} from './item/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    SimpleComponent,
    FeatureComponent,
    UnrecognizedComponent,
    WidgetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],

  entryComponents: [SimpleComponent, FeatureComponent, UnrecognizedComponent, WidgetComponent],

  bootstrap: [AppComponent]
})
export class AppModule {
}
