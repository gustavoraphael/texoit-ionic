import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  get(params?: any) {
    return this.http.get(environment.URL + `${params}`).pipe(map((res: any) => res));
  }

}
