import { Injectable } from '@angular/core';
import { MOCKQUESTIONS } from 'src/app/data/mock-questions';
import { IntroductionQuestion } from 'src/app/models/introduction-question';
import { QuestionBase } from 'src/app/models/question-base.model';
import { RadioQuestion } from 'src/app/models/radio-question';
import { SliderQuestion } from 'src/app/models/slider-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  getMockQuestionsData(): QuestionBase<string>[] { return [
    // new IntroductionQuestion({
    //   name: 'eq5dHeader',
    //   type: 'introduction',
    //   label: 'EQ-5D-5L',
    //   description: 'Health Questionnaire English version for the UK'
    // }),
    new RadioQuestion({
      name: 'mobility',
      type: 'choice',
      label: 'MOBILITY',
      instructions: 'Please select the ONE box that best describes your health TODAY.',
      options: [ 
        {value: 1, display: 'I have no problems in walking about'}, 
        {value: 2,display: "I have slight problems in walking about"}]
    }),
    new SliderQuestion({
      name: "healthVas",
		  type: "vas",
		  label: "<ul><li>We would like to know how good or bad your health is TODAY.</li><li>You will see a scale numbered 0 to 100.</li><li>100 means the best health you can imagine.</li><li>0 means the best health you can imagine.</li><li>Please indicate on the scale how your health is TODAY</li></ul>",
		  isLabelHtml: true,
		  minValue: 0,
		  maxValue: 100,
		  stepSize: 1,
		  minText: "The worst health you can imagine",
		  maxText: "The best health you can imagine"
    })
  ]
  }
}
