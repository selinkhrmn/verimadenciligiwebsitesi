import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { UygulamaComponent } from './uygulama/uygulama.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
    imports:[ModelModule, BrowserModule,FormsModule,RouterModule],
    exports: [ShopComponent,CartDetailComponent, CheckoutComponent,UygulamaComponent,ProgramComponent],
    declarations:[ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent,UygulamaComponent,ProgramComponent]
})
export class ShopModule {}

