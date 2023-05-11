import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WeatherQuizPage } from './weather-quiz/weather-quiz.page';
import { WeatherFactsPage } from './weather-facts/weather-facts.page';
import { GeolocationPage } from './geolocation/geolocation.page';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'weather-quiz',
    loadChildren: () => import('./weather-quiz/weather-quiz.module').then( m => m.WeatherQuizPageModule)
  },
  {
    path: 'weather-facts',
    loadChildren: () => import('./weather-facts/weather-facts.module').then( m => m.WeatherFactsPageModule)
  },
  {
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
