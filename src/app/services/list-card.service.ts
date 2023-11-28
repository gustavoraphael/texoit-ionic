import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
  ) { }

  get(page: number, pageSize: number, filterWinner: boolean | null, selectedYear: number | null) {
    let queryParams = `?page=${page}&size=${pageSize}`;
    if (filterWinner !== null) {
      queryParams += `&winner=${filterWinner}`;
    }
    if (selectedYear) {
      queryParams += `&year=${selectedYear}`;
    }
    return this.http.get(environment.URL + `${queryParams}`).pipe(map((res: any) => res));
  }

}
