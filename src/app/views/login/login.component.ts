import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private http: HttpClient, private service: ServiceService, private router: Router) {}

  submitForm(user) {
    console.log('**** user', user);
    this.service.getActiveSurvey().subscribe((res) => {
      console.log('login success --->', res);
      this.service.updatedDataSelection(res['optionsList']);
      this.router.navigate(['survey/user']);
    });
  }
}
