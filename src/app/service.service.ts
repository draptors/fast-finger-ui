import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import {map} from 'rxjs/operators';
import {Questions, QuestionsList} from './survey.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  /**
   * Login service
   */
  // checkLogin() {
  //   this.http.post(`survey/registration`, '').pipe(map((res) => res.json())).subscribe((response) => {
  //
  //   });
  // }

  /**
   * Get Survey Questions
   */
  getSurveyData() {
    this.http.get('survey/listQuestions').pipe(map((res) => {})).subscribe((res) => {

    });
  }

  /**
   * create survey
   */
  createSurvey() {
    this.http.get('survey/createSurvey').pipe(map((res) => {})).subscribe((res) => {

    });
  }

  /**
   * active survey
   */
  getActiveSurvey() {
    this.http.get<Questions>('http://localhost:3000/Data').pipe(map((res) => {
      console.log(res);
    }));
  }
}
