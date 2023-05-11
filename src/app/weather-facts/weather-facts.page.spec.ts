import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherFactsPage } from './weather-facts.page';

describe('WeatherFactsPage', () => {
  let component: WeatherFactsPage;
  let fixture: ComponentFixture<WeatherFactsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherFactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
