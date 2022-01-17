import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-management-update',
  templateUrl: './user-management-update.component.html',
  styleUrls: ['./user-management-update.component.css']
})
export class UserManagementUpdateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  user!: any;

  editForm= this.fb.group({
    id: [],
    name: [],
    email: []
  })

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      if (user) {
        this.user = user;
        if (this.user.id === undefined) {
          this.user.activated = true;
        }
        this.updateForm(user);
      }
    });
  }

  private updateForm(user: any): void {
    this.editForm.patchValue({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
  previousState(): void {
    window.history.back();
  }

  save(){}
}
