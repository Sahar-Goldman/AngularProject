import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './Services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isQuizOver!: Observable<boolean>;
  title = 'pop-quiz-with-services';

  constructor(private stateService : StateService) {
  }

  ngOnInit(): void {
    this.isQuizOver = this.stateService.isQuizOverService();
  }


  
}


