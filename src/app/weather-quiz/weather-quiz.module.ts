import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherQuizPageRoutingModule } from './weather-quiz-routing.module';

import { WeatherQuizPage } from './weather-quiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherQuizPageRoutingModule
  ],
  declarations: [WeatherQuizPage]
})
export class WeatherQuizPageModule {}
