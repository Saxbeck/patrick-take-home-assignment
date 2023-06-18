import { Injectable } from '@angular/core';
import { IntroductionQuestion } from 'src/app/models/introduction-question';
import { QuestionBase } from 'src/app/models/question-base.model';
import { RadioQuestion } from 'src/app/models/radio-question';
import { SliderQuestion } from 'src/app/models/slider-question';
import { MOCKDATA } from 'src/app/data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  mockdata = MOCKDATA;
  questions: QuestionBase<string>[] = [];

  getMockQuestionsData() : QuestionBase<string>[] {
    this.mockdata.forEach(question => {
      let qst = this.createQuestion(question)
      this.questions.push(qst);
    })
    //console.log(this.questions);
    
    return this.questions;
  }

  createQuestion(question:any): QuestionBase<string>{
    if(question.type === 'introduction'){
      return new IntroductionQuestion(question)
    } else if (question.type === "choice"){
      return new RadioQuestion(question)
    } else if (question.type === "vas"){
      return new SliderQuestion(question)}
    else { throw new Error('Invalid Type Match ')}
  }
}
