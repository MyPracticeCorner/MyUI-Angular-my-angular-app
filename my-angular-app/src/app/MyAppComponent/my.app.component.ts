import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../MyApiService/my.api.service';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './my.app.component.html',
})
export class MyAppComponent implements OnInit {

  weatherForecastData:any;

  constructor(private myApiService: MyApiService){

  }

  ngOnInit(): void {
    this.myApiService.getWeatherForecastData().subscribe(response=> {
      this.weatherForecastData = response;
    })
  }
}
