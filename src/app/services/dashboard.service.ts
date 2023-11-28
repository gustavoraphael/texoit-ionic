import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment'
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }

  list(page: number, pageSize: number, selectedYear?: string) {
    let queryParams = `?page=${page}&size=${pageSize}&winner=true`;
    
    if (selectedYear) {
      queryParams += `&year=${selectedYear}`;
    }
    return this.http.get(environment.URL + `${queryParams}`).pipe(map((res: any) => res));
  }

  getYearsWithWinners() {
    return this.http.get(environment.URL + `?projection=years-with-multiple-winners`).pipe(map((res: any) => res));
  }

  getStudiosWithWinners() {
    return this.http.get(environment.URL + `?projection=studios-with-win-count`).pipe(map((res: any) => res));
  }

  getIntervalProducers() {
    return this.http.get(environment.URL + `?projection=max-min-win-interval-for-producers`).pipe(map((res: any) => res));
  }
}
