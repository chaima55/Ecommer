import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CardComponent} from './components/card/card.component';

const routes: Routes = [
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent },
  {path: 'card', component: CardComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
