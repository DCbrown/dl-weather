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
  location = {
    wLat: 0,
    wLon: 0
  };

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location.wLat = position.coords.longitude;
        this.location.wLon = position.coords.latitude;
      });
    } else {
      // Default New York Lat and Lon
      this.location.wLat = 40.7128;
      this.location.wLon = -74.006;
    }

    this.weatherService
      .getTodayWeatherdata(this.location.wLat, this.location.wLon)
      .subscribe(data => (this.weatherData = data));
  }
}
