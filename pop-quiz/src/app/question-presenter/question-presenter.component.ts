import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Question } from '../model/question';
import { Questions } from '../model/questions';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  @Input()
  question: Question;

  @Output()
  answerChosen = new EventEmitter<string>();

  onSelectAnswer(answer : string){
    this.answerChosen.emit(answer);
  }
  constructor() {
    this.question = Questions[0];
  }

  ngOnInit(): void {
  }

}
