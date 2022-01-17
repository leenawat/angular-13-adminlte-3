import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-user-management-update',
  templateUrl: './user-management-update.component.html',
  styleUrls: ['./user-management-update.component.css']
})
export class UserManagementUpdateComponent implements OnInit {

  user!: any;
  editForm = this.fb.group({
    id: [],
    name: [],
    email: [],
    dateOfBirth: [],
  })

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private calendar: NgbCalendar) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      if (user) {
        this.user = user;
        if (this.user.id === undefined) {
          this.user.activated = true;
          this.user.dateOfBirth = DateTime.now().toISODate()
        }
        this.updateForm(this.user);
      }
    });
  }

  private updateForm(user: any): void {
    this.editForm.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth
    });
  }

  private updateUser(user: any): void {
    user.name = this.editForm.get(['name'])!.value;
    user.email = this.editForm.get(['email'])!.value;
    user.dateOfBirth = this.editForm.get(['dateOfBirth'])!.value;
  }

  previousState(): void {
    window.history.back();
  }

  save() {
    // parse by referene
    this.updateUser(this.user)
  }
}
