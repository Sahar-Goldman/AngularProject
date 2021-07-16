import { Injectable } from "@angular/core";
import { Question } from "../model/question";
import { Questions } from "../model/questions";

@Injectable({
    providedIn: 'root'
})
export class StateService {
    currentQuestion: Question
    currentQustionIndex: number;
    summary: Question[];
    isQuizOver: boolean;

    constructor(){
        this.currentQustionIndex = 0;
        this.currentQuestion = Questions[this.currentQustionIndex];
        this.summary = [];
        this.isQuizOver = false;
    }

    getNextQuestionService(){
        this.currentQuestion = Questions[this.currentQustionIndex];
        this.currentQustionIndex++;
        return this.currentQuestion;
    }

    updateAnswerService(answer : string){
        if(!this.isQuizOver){
            let answerIndex = this.currentQuestion.answers.indexOf(answer);
            this.currentQuestion.userAnswer = answerIndex;
            this.summary.push(this.currentQuestion);
            this.isQuizOver = (Questions.length <= this.currentQustionIndex)? true : false;
        }
}

    isQuizOverService(){
        return this.isQuizOver;
    }

    getAnsweredQuestionsService(){
        return this.summary;
    }
}