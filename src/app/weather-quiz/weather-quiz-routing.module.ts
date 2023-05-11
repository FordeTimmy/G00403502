import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherQuizPage } from './weather-quiz.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherQuizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherQuizPageRoutingModule {}
