import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockdataService } from 'src/app/services/mockdata/mockdata.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions?:any

  constructor(private mockService:MockdataService){}

  ngOnInit(): void {
    this.getMockData()
  }

  getMockData(): void{
    this.questions = this.mockService.getMockData();
    console.log(this.questions);
  }

}
