import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guard/auth.guard';
import { MainComponent } from '@app/layout/main/main.component';
import { Role } from '@app/model/Role';
import { BlankComponent } from '@app/pages/blank/blank.component';
import { DocsComponent } from '@app/pages/docs/docs.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { PermissionDeniedComponent } from '@app/pages/permission-denied/permission-denied.component';
import { RegisterComponent } from '@app/pages/register/register.component';
import { SubMenuComponent } from '@app/pages/sub-menu/sub-menu.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

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
        path: 'user-management',loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule),
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
      },
      {
        path: 'docs',
        component: DocsComponent,
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
