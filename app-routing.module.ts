import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductHomeComponent } from './product-home/product-home.component';


const routes: Routes = [

  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'products/:id',
    component:ProductDetailsComponent
  },
  {
    path:'edit',
    component:ProductEditComponent
  },
  {
    path:'',
    component:ProductHomeComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
