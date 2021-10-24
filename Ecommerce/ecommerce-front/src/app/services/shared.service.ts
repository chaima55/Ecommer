import {Injectable} from '@angular/core';
import {Product} from '../common/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  priceVal = 0;
  numberProducts = 0;
  products: Product[] = [];
  // tslint:disable-next-line:variable-name
  _priceValBS = new BehaviorSubject<number>(0);
  // tslint:disable-next-line:variable-name
  _numberProductsBS = new BehaviorSubject<number>(0);
  // tslint:disable-next-line:variable-name
  _productsBS = new BehaviorSubject<Product[]>([]);

  constructor() {
  }

  // tslint:disable-next-line:typedef
  sendProduct(product: Product) {
    this.products.push(product);
    this.priceVal += product.unitPrice;
    this.numberProducts++;
    this._priceValBS.next(this.priceVal);
    this._numberProductsBS.next(this.numberProducts);
    this._productsBS.next(this.products);
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    for (const p of this.products) {
      if (p.id === id) {
        this.products.splice(this.products.indexOf(p), 1);
        this.numberProducts -= 1;
        this.priceVal -= p.unitPrice;
        break;
      }
    }
    this._priceValBS.next(this.priceVal);
    this._numberProductsBS.next(this.numberProducts);
    this._productsBS.next(this.products);
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.products = [];
    this.priceVal = 0;
    this.numberProducts = 0;
    this._priceValBS.next(this.priceVal);
    this._numberProductsBS.next(this.numberProducts);
    this._productsBS.next(this.products);
  }
}
