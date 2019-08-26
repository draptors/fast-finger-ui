import {Component, ViewChild, OnInit } from '@angular/core';

import { ServiceService } from '../../service.service';
import {Router} from '@angular/router';

/**
 * Survey Component
 */
@Component({
  selector: 'survey-admin',
  templateUrl: 'survey.admin.component.html'
})
export class SurveyAdminComponent implements OnInit {
  questions: any;
  message = false;
  constructor(private service: ServiceService, private router: Router) { }
  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      this.questions = res;
    });
  }

  submitSurvey(data) {
    this.service.submitSurvey(data).subscribe((res) => {
      console.log('create survey-->', res);
      this.message = true;
      setTimeout(() => {
        this.router.navigate(['/charts']);
      }, 3000);

    });
  }



}
