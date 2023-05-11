import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  myWeather: any[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.WeatherReport().subscribe( //Using .subscribe invokes the method asynchronously.
      (data) => {                                    //Then, it will run the code within the brackets
        this.myWeather = data.weather;               // getting weather data 
      }
    );
  }
}
