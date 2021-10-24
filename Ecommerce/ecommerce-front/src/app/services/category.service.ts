import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8081/category';

  constructor(private http: HttpClient) {
  }

  loadList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/load-list');
  }
}
