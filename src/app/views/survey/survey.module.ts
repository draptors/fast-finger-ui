// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SurveyAdminComponent } from './survey.admin.component';
import { SurveyUserComponent } from './survey.user.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: SurveyAdminComponent,
      },
      {
        path: 'user',
        component: SurveyUserComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SurveyAdminComponent, SurveyUserComponent]
})
export class SurveyModule {}
