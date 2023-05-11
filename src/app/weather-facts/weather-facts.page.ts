import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weather-facts',
  templateUrl: './weather-facts.page.html',
  styleUrls: ['./weather-facts.page.scss'],
})
export class WeatherFactsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToHomePage() { // directs me back to the home page 
    this.router.navigate(['/home']);
  }
}
