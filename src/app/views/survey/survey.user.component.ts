import {Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {HttpClient} from '@angular/common/http';
import {Questions} from '../../survey.model';
import {map} from 'rxjs/operators';

/**
 * Survey Component
 */
@Component({
  selector: 'survey-user',
  templateUrl: 'survey.user.component.html'
})
export class SurveyUserComponent implements OnInit {
  private questions: Array<any>[];
  options: any;
  message = false;
  constructor(private service: ServiceService, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.service.data.subscribe((res) => {
      console.log('******* USER SURVEY ***', res);
      this.options = res;
    });
  }

  Submit() {
    this.service.userSubmitSurvery().subscribe(data => {
      console.log('****** USER SUBMIT SURVEY ********', data);
      this.message = true;
    });
  }

}
