import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';
import { BlankComponent } from './pages/blank/blank.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownMenuComponent } from './components/dropdown/dropdown-menu/dropdown-menu.component';
import { MessagesComponent } from './layout/header/messages/messages.component';
import { NotificationsComponent } from './layout/header/notifications/notifications.component';
import { UserComponent } from './layout/header/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MenuItemComponent,
    SubMenuComponent,
    BlankComponent,
    DropdownComponent,
    DropdownMenuComponent,
    MessagesComponent,
    NotificationsComponent,
    UserComponent,
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
