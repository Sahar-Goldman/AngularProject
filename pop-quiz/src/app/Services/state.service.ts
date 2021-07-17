import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Question } from "../model/question";
import { Questions } from "../model/questions";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    currentQustionIndex: BehaviorSubject<number>;

    constructor(){
        this.currentQustionIndex = new BehaviorSubject<number>(0);
    }

    public getNextQuestionService(): Observable<Question>{
        return this.currentQustionIndex.pipe(
                map(index => Questions[index])
            );
    }

    public updateAnswerService(answerIndex : number): Promise<void>{
        let questionIndex = this.currentQustionIndex.value;
        let questionToUpdate = Questions[questionIndex];
        questionToUpdate.userAnswer = answerIndex;
        this.currentQustionIndex.next(++questionIndex);
        return Promise.resolve();
}

    public isQuizOverService(): Observable<boolean>{
        return this.currentQustionIndex.pipe(
            map(index => Questions.length <= index)
        );
    }

    public getAnsweredQuestionsService(): Observable<Question[]>{
        return this.currentQustionIndex.pipe(
            map(index => Questions.filter(question => question.userAnswer !== -1))
        );
    }
}