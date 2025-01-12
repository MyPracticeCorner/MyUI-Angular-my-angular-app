import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  private myApiUrl = 'https://localhost:7287';

  constructor(private http: HttpClient) { }

  getWeatherForecastData(): Observable<any> {
    return this.http.get(`${this.myApiUrl}/weatherforecast`);
  }

  postCreateDomesticAccount(data:any): Observable<any> {
    return this.http.post(
      `${this.myApiUrl}/WeatherForecast/CreateDomesticAccount`,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
    );
  }

}
