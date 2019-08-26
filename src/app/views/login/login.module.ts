// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ LoginService, AuthGuard],
  declarations: [ LoginComponent ]
})
export class LoginModule {}
