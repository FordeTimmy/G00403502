import { Component } from '@angular/core';
import { Router } from '@angular/router'; //importing the router to allow me to naviagte to different pages 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private router: Router) {}
  goToWeather(){ //method bringing me to the weather page 
    this.router.navigate(['/weather']);
  }
  
  goToWeatherQuiz() { //method bringing me to the weather quiz page 
    this.router.navigate(['/weather-quiz']);
  }
  goToWeatherFacts() { //method bringing me to the weather facts page 
      this.router.navigate(['/weather-facts']);
  }
  goToGeolocationPage() { //method bringing me to the location page 
    this.router.navigate(['/geolocation']);
  }
  }

