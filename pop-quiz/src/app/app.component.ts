import { Component } from '@angular/core';
import { Question } from './model/question';
import {Questions} from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion: Question;
  currentQustionIndex: number;
  summary: Question[];
  isQuizOver: boolean;

  constructor() {
    this.currentQustionIndex = 0;
    this.currentQuestion = Questions[this.currentQustionIndex];
    this.summary = [];
    this.isQuizOver = false;
  }

  userSelectAnswer(answer : string){
    if(!this.isQuizOver){
      let answerIndex = this.currentQuestion.answers.indexOf(answer);
      this.currentQuestion.userAnswer = answerIndex;

      this.summary.push(this.currentQuestion);
      this.currentQustionIndex++;
      this.currentQuestion = Questions[this.currentQustionIndex];
  
      this.isQuizOver = !(this.currentQuestion);
    }
  }

}
