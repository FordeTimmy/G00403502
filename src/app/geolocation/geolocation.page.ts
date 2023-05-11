import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; //importing the geolocationn plugin 
import { Browser } from '@capacitor/browser'; // importing the browser plugin 

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  coordinates: any = "";
  lat: string = "";
  long: String = "";

  async openBrowser() { //Plugin that brings me to met éireann webpage
    await Browser.open({ url: 'https://www.met.ie/' });
    };

  async getGPS() { //Plugin that gets my location 
  this.coordinates = await Geolocation.getCurrentPosition();
  this.lat = this.coordinates.coords.latitude;
  this.long = this.coordinates.coords.longitude;
  }
  constructor() { }

  ngOnInit() {
  }

}
