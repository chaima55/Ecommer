import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8081/product';

  constructor(private http: HttpClient) { }

  getProductListPaginate(thePage: number, thePageSize: number, theCategoryId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/load-list?id=${theCategoryId}&page=${thePage}&size=${thePageSize}`);
  }

  searchProductsPaginate(thePage: number, thePageSize: number, theKeyword: string | null): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/load-list-name?name=${theKeyword}&page=${thePage}&size=${thePageSize}`);
  }

  loadOne(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl+'/load-one/'+id);
  }

}
