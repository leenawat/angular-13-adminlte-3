import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { BlankComponent } from './pages/blank/blank.component';
import { AuthGuard } from './guard/auth.guard';
import { Role } from './model/Role';
import { HomeComponent } from './pages/home/home.component';
import { PermissionDeniedComponent } from './pages/permission-denied/permission-denied.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.User] },
    children: [
      {
          path: '',
          component: HomeComponent,
          canActivate: [AuthGuard],
          data: { roles: [Role.Admin, Role.User] }
      },
      {
          path: 'blank',
          component: BlankComponent,
          canActivate: [AuthGuard],
          data: { roles: [Role.Admin, Role.User] }
      },
      {
          path: 'sub-menu-1',
          canActivate: [AuthGuard],
          component: SubMenuComponent,
          data: { roles: [Role.Admin] }
      },
      {
          path: 'sub-menu-2',
          canActivate: [AuthGuard],
          component: BlankComponent,
          data: { roles: [Role.User] }
      },
      {
          path: 'permission-denied',
          component: PermissionDeniedComponent,
      },
    ]
  }, {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
