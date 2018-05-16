import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductBrandComponent } from './product-brand/product-brand.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewAuthorComponent } from './review-author/review-author.component';
import { ReviewAllComponent } from './review-all/review-all.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailsComponent,
    ProductBrandComponent,
    ProductCategoryComponent,
    ReviewDetailsComponent,
    ReviewAuthorComponent,
    ReviewAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
