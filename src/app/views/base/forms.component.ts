import { Component } from '@angular/core';
import {ServiceService} from '../../service.service';

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  constructor(private service: ServiceService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  Submit() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
    });
  }

}
