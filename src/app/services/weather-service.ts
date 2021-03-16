import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = 'ebe86006ea6a78231de667fa1c0f112b';
  todayUrl = 'http://api.openweathermap.org/data/2.5/weather?';
  fiveDayUrl = 'http://api.openweathermap.org/data/2.5/forecast?';

  constructor(public http: HttpClient) {}

  // Call API for today's weather
  getTodayWeatherdata(Longitude, Latitude) {
    return this.http.get(`${this.todayUrl}lat=${Latitude}&lon=${Longitude}&units=imperial&APPID=${this.apiKey}`);
  }

  // Call API for five day forcast weather
  getfiveDayWeatherdata(Longitude, Latitude) {
    return this.http.get(`${this.fiveDayUrl}lat=${Latitude}&lon=${Longitude}&units=imperial&APPID=${this.apiKey}`);
  }
}
