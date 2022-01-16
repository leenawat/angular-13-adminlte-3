import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
