import {Component, ViewChild, OnInit } from '@angular/core';

/**
 * Survey Component
 */
@Component({
  selector: 'survey-user',
  templateUrl: 'survey.user.component.html'
})
export class SurveyUserComponent implements OnInit {
  private questions: Array<any>[];
  constructor() {
  }
  ngOnInit(): void {
    this.questions = [
      {

      }
    ];
  }

}
