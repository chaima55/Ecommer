import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './components/search/search.component';
import {CategoryMenuComponent} from './components/category-menu/category-menu.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidBarComponent} from './components/sid-bar/sid-bar.component';
import {CardComponent} from './components/card/card.component';
import {ModalLoginComponent} from './components/modal-login/modal-login.component';
import {ModalSignUpComponent} from './components/modal-sign-up/modal-sign-up.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchComponent,
    CategoryMenuComponent,
    ProductDetailsComponent,
    NavbarComponent,
    SidBarComponent,
    CardComponent,
    ModalLoginComponent,
    ModalSignUpComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalLoginComponent,
    ModalSignUpComponent
  ]
})
export class AppModule {
}
