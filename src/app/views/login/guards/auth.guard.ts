import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';

import { CanActivate } from '@angular/router';
import {Observable} from 'rxjs';

import { LoginService } from '../services/login.service';
import {take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private login: LoginService) {
  }

  canActivate(): Observable<boolean> {
    return this.login.registration().pipe(take(1));
  }

}
