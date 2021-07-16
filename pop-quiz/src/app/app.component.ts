import { Component, OnInit } from '@angular/core';
import { StateService } from './Services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  isQuizOver!: boolean;
  title = 'pop-quiz-with-services';

  constructor(private stateService : StateService) {
    this.isQuizOver = stateService.isQuizOverService()
  }
  ngDoCheck(): void {
    this.isQuizOver = this.stateService.isQuizOverService()
  }

  
}


