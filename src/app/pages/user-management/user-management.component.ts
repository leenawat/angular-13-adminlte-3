import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users = [
    { id: 11, name: 'Dr Nice', email: 'user1@email.com' },
    { id: 12, name: 'Narco', email: 'user2@email.com' },
    { id: 13, name: 'Bombasto', email: 'user2@email.com' },
    { id: 14, name: 'Celeritas', email: 'user2@email.com' },
  ];
  
  page = 1;
  pageSize = 4;
  collectionSize = this.users.length;
  filter = new FormControl('');

  constructor() {
    this.refreshUsers();
  }

  ngOnInit(): void {
  }

  refreshUsers() {
    // this.countries = COUNTRIES
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
