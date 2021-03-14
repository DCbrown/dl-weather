import { WeatherService } from './services/weather-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayForcastComponent } from './components/today-forcast/today-forcast.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { FiveDayForcastComponent } from './components/five-day-forcast/five-day-forcast.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodayForcastComponent,
    FiveDayForcastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiSwitchModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
