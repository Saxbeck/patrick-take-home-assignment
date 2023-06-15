import { Component, Input } from '@angular/core';
import { CommonModule, NgSwitch } from '@angular/common';

import { QuestionBase } from 'src/app/models/question-base.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


@Component({
  selector: 'app-dynamic-form-question',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, MatRadioModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;

  get isValid() {
    return this.form.controls[this.question.name].valid;}
}
