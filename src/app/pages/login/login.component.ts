import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
    authService.currentUser.subscribe(user => {
      if (user) {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnInit(): void {
  }

  async submit() {
    console.log('submit')
    const credential: Credential = this.form.getRawValue();
    const result = await this.authService.login(credential)

    if (result?.message === "success") {
      await this.authService.getUser()
    }

  }
}
