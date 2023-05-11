import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherFactsPage } from './weather-facts.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherFactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherFactsPageRoutingModule {}
