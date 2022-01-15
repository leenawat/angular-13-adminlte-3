import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/pages/login/login.component';
import { MainComponent } from '@app/layout/main/main.component';
import { SubMenuComponent } from '@app/pages/sub-menu/sub-menu.component';
import { BlankComponent } from '@app/pages/blank/blank.component';
import { AuthGuard } from '@app/guard/auth.guard';
import { Role } from '@app/model/Role';
import { HomeComponent } from '@app/pages/home/home.component';
import { PermissionDeniedComponent } from '@app/pages/permission-denied/permission-denied.component';
import { RegisterComponent } from '@app/pages/register/register.component';

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
