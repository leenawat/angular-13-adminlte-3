import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
// import { MainComponent } from './main/main.component';
import { MainFullComponent } from './main/main-full.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { BlankComponent } from './pages/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: MainFullComponent,
    children: [
      {
          path: 'blank',
          component: BlankComponent
      },
      {
          path: 'sub-menu-1',
          component: SubMenuComponent
      },
      {
          path: 'sub-menu-2',
          component: BlankComponent
      },
    ]
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
