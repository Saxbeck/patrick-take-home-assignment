import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio'
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';


import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MockquestionService } from 'src/app/services/mockquestion.service';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit{
  
  isLinear = true;

  firstFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private questionService: MockquestionService) {}

  questions?: any = [];

  ngOnInit(): void{
    this.questions = this.questionService.getMockQuestions()
    console.log(this.questions);

    this.firstFormGroup = this._formBuilder.group({
      eq5dHeader: [null || "undefined", Validators.nullValidator],
      mobility: [Number, Validators.required],
      healthVas: ['', Validators.required],
      selfcare: ['', Validators.required],
      usualActivities: ['', Validators.required],
      painOrDiscomfort: ['', Validators.required],
      anxietyOrDepression: ['', Validators.required],
    });
    
  }

  print(): void {
    console.log(this.firstFormGroup);
    console.log(this.firstFormGroup.controls[1]);
    
  }
}
