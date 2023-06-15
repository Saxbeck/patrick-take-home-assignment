import { Injectable } from '@angular/core';
import { MOCKDATA } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor() { }

  getMockData():any {
    return MOCKDATA;
  }
}
