import { Component, OnInit } from '@angular/core';
// import {AppService} from '@services/app.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: any;

  constructor(
    // private appService: AppService
  ) { }

  ngOnInit(): void {
    // this.user = this.appService.user;
    this.user = {
      picture: undefined,
      email: 'user@email.com',
      createdAt: '1987-11-04'
    }
  }

  logout() {
    // this.appService.logout();
  }

  formatDate(date: string) {
    return DateTime.fromISO(date)
      .reconfigure({ outputCalendar: "buddhist" })
      .setLocale('th')
      .toFormat('dd LLL yyyy')
  }
}