import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Question } from '../model/question';
import { StateService } from '../Services/state.service'

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
    question: Question;

  constructor(private stateService : StateService) {
    this.question = this.stateService.getNextQuestionService();
  }

  onSelectAnswer(answer : string){
    this.stateService.updateAnswerService(answer);
    if(!this.stateService.isQuizOverService())
      this.question = this.stateService.getNextQuestionService();
  }
  
  ngOnInit(): void {
  }

}
