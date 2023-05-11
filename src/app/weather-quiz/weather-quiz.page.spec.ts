import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherQuizPage } from './weather-quiz.page';

describe('WeatherQuizPage', () => {
  let component: WeatherQuizPage;
  let fixture: ComponentFixture<WeatherQuizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WeatherQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
