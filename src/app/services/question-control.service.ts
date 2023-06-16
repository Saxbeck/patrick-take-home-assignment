import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: QuestionBase<string>[]){
    const group: any = {};

    /*the question typecheck is a bit hacky
      find a better solutiuon.
    */
    questions.forEach(question => {
      group[question.name] = question.name && question.type !== "introduction" 
        ? new FormControl(null || '', Validators.required) 
        : new FormControl(null || '', Validators.nullValidator)
    });
    return new FormGroup(group);
  }
}
