import {Component, ViewChild, OnInit } from '@angular/core';

/**
 * Questions model
 */
export interface Questions {
  quesId?: number;
  quesDesc?: string;
  optionsList?: [];
}

/**
 * Survey Component
 */
@Component({
  selector: 'survey-user',
  templateUrl: 'survey.user.component.html'
})
export class SurveyUserComponent implements OnInit {
  private questions: Questions[];
  constructor() {
  }
  ngOnInit(): void {
    this.questions = [
      {
        quesId: 1,
        quesDesc: 'Question 1'
      },
      {
        quesId: 2,
        quesDesc: 'Question 2'
      },
      {
        quesId: 3,
        quesDesc: 'Question 3'
      },
      {
        quesId: 4,
        quesDesc: 'Question 4'
      },
      {
        quesId: 5,
        quesDesc: 'Question 5'
      }
    ];
  }

}
