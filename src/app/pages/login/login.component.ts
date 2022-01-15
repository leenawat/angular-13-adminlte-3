import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/service/auth.service';

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
    document.querySelector('body')?.removeAttribute('class');
    document.querySelector('body')?.classList.add('hold-transition', 'login-page');
    
  }

  async submit() {
    console.log('submit')
    const credential: Credential = this.form.getRawValue();
    const result = await this.authService.login(credential)

    console.log({result})
    if (result?.message === "success" || result?.access_token) {
      await this.authService.getUser()
    }

  }
}
