import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherFactsPageRoutingModule } from './weather-facts-routing.module';

import { WeatherFactsPage } from './weather-facts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherFactsPageRoutingModule
  ],
  declarations: [WeatherFactsPage]
})
export class WeatherFactsPageModule {}
