import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-weather-quiz',
  templateUrl: './weather-quiz.page.html',
  styleUrls: ['./weather-quiz.page.scss'],
})
export class WeatherQuizPage implements OnInit {

  questions: any[] = [];
  currentQuestion: number = 0;
  selectedAnswer: number = -1;
  score: number = 0;

  constructor(private router: Router) {
    
    this.questions = [ // questions for the quiz 
      {
        question: 'Which instrument is used to measure wind speed?',
        answers: ['Barometer', 'Anemometer', 'Thermometer', 'Hygrometer'],
        correctAnswer: 1
      },
      {
        question: 'What is the term for a sudden, violent storm with strong winds and heavy rainfall?',
        answers: ['Hurricane', 'Tornado', 'Blizzard', 'Monsoon'],
        correctAnswer: 1
      },
      {
        question: 'What unit is used to measure air pressure?',
        answers: ['Millibar', 'Pascal', 'Kilogram', 'Newton'],
        correctAnswer: 0
      },
      {
        question: 'What is the process of water changing from a gas to a liquid called?',
        answers: ['Condensation', 'Evaporation', 'Precipitation', 'Transpiration'],
        correctAnswer: 0
      },
      {
        question: 'Which layer of the atmosphere is closest to the Earth\'s surface?',
        answers: ['Stratosphere', 'Troposphere', 'Exosphere', 'Mesosphere'],
        correctAnswer: 1
      },
      {
        question: 'What causes thunderstorms?',
        answers: ['Tornadoes', 'Hurricanes', 'Cumulonimbus clouds', 'Stratus clouds'],
        correctAnswer: 2
      },
      {
        question: 'What is the average speed of light rain?',
        answers: ['10-20 mph', '20-30 mph', '30-40 mph', '40-50 mph'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is a greenhouse gas?',
        answers: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
        correctAnswer: 2
      },
      {
        question: 'What is the boundary between two air masses called?',
        answers: ['Front', 'Stratosphere', 'Tropopause', 'Thermosphere'],
        correctAnswer: 0
      },
      {
        question: 'What is the most common unit to measure temperature?',
        answers: ['Kelvin', 'Celsius', 'Fahrenheit', 'Rankine'],
        correctAnswer: 1
      },
    
    ];
  }
  
  ngOnInit() {
    
  }

  nextQuestion() {
    // Reset the selected answer to -1 to clear the current selection
    this.selectedAnswer = -1;
    
    // Move to the next question by incrementing the current question index
    this.currentQuestion++;
  }
  
  selectAnswer(answerIndex: number) {
    // Set the selected answer index based on the user's choice
    this.selectedAnswer = answerIndex;
  }
  
  submitAnswer() {
    // Get the current question
    const currentQuestion = this.questions[this.currentQuestion];
    
    // Check if the selected answer is correct
    if (this.selectedAnswer === currentQuestion.correctAnswer) {
      // Increment the score if the answer is correct
      this.score++;
    }
    
    // Move to the next question
    this.nextQuestion();
  }
  
  restartQuiz() {
    // Reset the quiz state to the initial values
    this.currentQuestion = 0;
    this.selectedAnswer = -1;
    this.score = 0;
  }
  
  goToHomePage() { // method to bring me back to the home page 
    this.router.navigate(['/home']);
  }
}
