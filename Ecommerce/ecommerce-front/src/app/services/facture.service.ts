import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facture} from '../common/facture';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private url: string = "http://localhost:8081/facture"

  constructor(private http: HttpClient) {}

  save(facture: Facture, userId: any):Observable<void> {
    return this.http.post<void>(this.url+'/'+userId,facture);
  }

  loadList(userId: number):Observable<Facture[]> {
    return this.http.get<Facture[]>(this.url+'/'+userId);
  }
}
