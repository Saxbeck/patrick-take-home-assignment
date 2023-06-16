import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: QuestionBase<string>[]){
    const group: any = {};

    questions.forEach(question => {
      group[question.name] = question.name ? 
        new FormControl(null || '', Validators.required): new
        FormControl(null || '')
    });
    return new FormGroup(group);
  }
}
