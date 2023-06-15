import { Injectable } from '@angular/core';
import { MOCKQUESTIONS } from 'src/app/data/mock-questions';
import { IntroductionQuestion } from 'src/app/models/introduction-question';
import { QuestionBase } from 'src/app/models/question-base.model';
import { RadioQuestion } from 'src/app/models/radio-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  getMockQuestionsData(): QuestionBase<string>[] { return [
    new IntroductionQuestion({
      name: 'eq5dHeader',
      type: 'introduction',
      label: 'EQ-5D-5L',
      description: 'Health Questionnaire English version for the UK'
    }),
    new RadioQuestion({
      name: 'mobility',
      type: 'choice',
      label: 'MOBILITY',
      instructions: 'Please select the ONE box that best describes your health TODAY.',
      options: [ 
        {value: 1, display: 'I have no problems in walking about'}, 
        {value: 2,display: "I have slight problems in walking about"}]
    })
  ]
  }
}
