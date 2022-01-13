import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { MainFullComponent } from './main/main-full.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { BlankComponent } from './pages/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainFullComponent,
    MenuItemComponent,
    SubMenuComponent,
    BlankComponent,
  ],
  imports: [
    OverlayscrollbarsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
