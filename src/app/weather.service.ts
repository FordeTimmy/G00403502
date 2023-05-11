import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importing the http client so i can use my api key 
import { Observable } from 'rxjs'; 
 // created a service called weather so i can import my api key for the weather
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private hc: HttpClient) { }

  WeatherReport():Observable<any> { // method calling my api so i can use it within my app 
    return this.hc.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3a80989f7162dc68fd8984cfdfaf4d38');
  }
}
