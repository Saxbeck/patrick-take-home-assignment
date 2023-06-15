import { Injectable } from '@angular/core';
import { MOCKDATA } from '../data/mockdata2';

@Injectable({
  providedIn: 'root'
})
export class MockquestionService {

  constructor() { }

  getMockQuestions() {
    return MOCKDATA;
  }
}
