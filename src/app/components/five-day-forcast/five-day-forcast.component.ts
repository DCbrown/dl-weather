import { Forecast } from '../../forecast';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather-service';

@Component({
  selector: 'app-five-day-forcast',
  templateUrl: './five-day-forcast.component.html',
  styleUrls: ['./five-day-forcast.component.css']
})
export class FiveDayForcastComponent implements OnInit {
 
  forcast: Forecast[] = [];
  location = {
    wLat: 0,
    wLon: 0
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location.wLat = position.coords.longitude;
        this.location.wLon = position.coords.latitude;
      });
  } else {
    // Default New York Lat and Lon
    this.location.wLat = 40.7128;
    this.location.wLon = -74.0060;
  }
    this.weatherService.getfiveDayWeatherdata(this.location.wLat, this.location.wLon).subscribe((data: any) => {
      for (let i = 0;  i < data.list.length; i += 8) {
        const ForcastResults = new Forecast(data.list[i].dt_txt,
                                            data.list[i].weather[0],
                                            data.list[i].main.temp);
        this.forcast.push(ForcastResults);
      }
    });
  }
}
