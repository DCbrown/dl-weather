import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather-service';

@Component({
  selector: 'app-today-forcast',
  templateUrl: './today-forcast.component.html',
  styleUrls: ['./today-forcast.component.css']
})
export class TodayForcastComponent implements OnInit {
  weatherData;
  date = new Date();
  // Detroit
  location = {
    wLat: -83.0458,    
    wLon: 42.3314
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getTodayWeatherdata(this.location.wLat, this.location.wLon)
      .subscribe(data => (this.weatherData = data));
  }
}
