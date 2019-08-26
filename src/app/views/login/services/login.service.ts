import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import {map} from 'rxjs/operators';
import { Questions } from 'app/survey.model';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

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

  registration() {
    return this.http.post('http://192.168.43.57:8080/survey/registration', { userId: 1, role: 'admin'});
  }
}
