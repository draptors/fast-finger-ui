import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import {map} from 'rxjs/operators';
import {Questions, QuestionsList} from './survey.model';
import {BehaviorSubject, forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private dataSource = new BehaviorSubject(null);
  data = this.dataSource.asObservable();
  constructor(private http: HttpClient) { }

  /**
   * Get options for user
   * @param data
   */
  updatedDataSelection(data) {
    this.dataSource.next(data);
  }

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

  getUsers(): Observable<Questions> {
    const headers = new HttpHeaders();
    return this.http.get<Questions>('http://192.168.43.57:8080/survey/listQuestions', { headers: headers});
  }

  /**
   * User submits survey
   */
  userSubmitSurvery() {
    const headers = new HttpHeaders();
    return this.http.post('http://192.168.43.57:8080/survey/submitSurvey', {
      userId: '1',
      quesId: 1,
      optionId: 1,
      surveyId: 1
    }, { headers: headers});
  }

  /**
   * submit survey
   */
  submitSurvey(data) {
    const headers = new HttpHeaders();
     return this.http.post('http://192.168.43.57:8080/survey/createSurvey', data, { headers: headers});
  }

  /**
   * Get Actiove Survey
   */
  getActiveSurvey() {
    const headers = new HttpHeaders();
    return this.http.post('http://192.168.43.57:8080/survey/getActiveSurvey', {quesId: 1},
      { headers: headers});

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
  // getActiveSurvey() {
  //   this.http.get<Questions>('http://localhost:3000/Data').pipe(map((res) => {
  //     console.log(res);
  //   }));
  // }
}
