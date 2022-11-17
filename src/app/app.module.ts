import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductCardComponent,
    CarouselComponent,
    ProductListComponent,
    Cat03Component,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
