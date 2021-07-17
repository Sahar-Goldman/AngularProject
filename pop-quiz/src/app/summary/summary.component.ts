import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { StateService } from '../Services/state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  questions!: Observable<Question[]>;
  
  constructor(private stateService : StateService) { 
  }

  ngOnInit(): void {
    this.questions = this.stateService.getAnsweredQuestionsService();
  }
}
