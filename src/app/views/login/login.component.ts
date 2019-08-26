import { Component } from '@angular/core';

import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private service: LoginService) {

  }
  trigger() {
    this.service.registration();
  }
}
