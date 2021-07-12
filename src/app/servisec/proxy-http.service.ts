import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxyHttpService {

  constructor(private http:HttpClient) { }

  public get(apiUrl:string):Observable<any> {
    return this.http.get(apiUrl);
  }
}
