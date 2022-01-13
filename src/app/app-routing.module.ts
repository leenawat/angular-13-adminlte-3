import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { MainComponent } from './main/main.component';
import { MainFullComponent } from './main/main-full.component';

const routes: Routes = [
  {
    path: '',
    component: MainFullComponent,
  }, {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
