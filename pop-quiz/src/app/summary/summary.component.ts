import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  questions!: Question[];
  
  constructor(private stateService : StateService) { 
  }

  ngDoCheck(): void {
    this.questions = this.stateService.getAnsweredQuestionsService();
  }
}
