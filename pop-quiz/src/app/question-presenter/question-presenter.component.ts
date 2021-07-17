import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { StateService } from '../Services/state.service'

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit{
    question!: Observable<Question>;

  constructor(private stateService : StateService) {
  }
  ngOnInit(): void {
    this.question = this.stateService.getNextQuestionService();
  }

  onSelectAnswer(answerIndex : number){
    this.stateService.updateAnswerService(answerIndex);
  }
}
