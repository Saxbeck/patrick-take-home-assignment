import { Injectable } from '@angular/core';
import { MOCKDATA } from '../data/mockdata';

@Injectable({
  providedIn: 'root'
})
export class MockquestionService {

  constructor() { }

  getMockQuestions() {
    return MOCKDATA;
  }
}
