import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HeroListComponent } from './hero-list/hero-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StarComponentComponent } from './star-component/star-component.component';
import { ProductFilterPipePipe } from './product-filter-pipe.pipe';
import {FormsModule} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http'
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductHomeComponent } from './product-home/product-home.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
    HeroListComponent,
    
    ProductListComponent,
    
    ProductDetailsComponent,
    
    StarComponentComponent,
    
    ProductFilterPipePipe,
    
    ConvertToSpacesPipe,
    
    ProductEditComponent,
    
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
