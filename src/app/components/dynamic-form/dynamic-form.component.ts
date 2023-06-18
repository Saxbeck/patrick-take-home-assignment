import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionServiceService } from 'src/app/services/questiondata/question-service.service';
import { QuestionBase } from 'src/app/models/question-base.model';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control.service';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,MatCardModule,ReactiveFormsModule, DynamicFormQuestionComponent, MatButtonModule, MatStepperModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{

  @Input() questions: QuestionBase<string>[] | null = [];
  @Input() form!: FormGroup;

  constructor(
    private qcs: QuestionControlService, 
    private qservice:QuestionServiceService){}
  
  ngOnInit(): void{
    this.questions = this.qservice.getMockQuestionsData();
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  print(): void {
    console.log(this.form.controls);
  }
}
