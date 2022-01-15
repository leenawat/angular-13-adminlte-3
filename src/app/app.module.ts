import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DropdownMenuComponent } from '@app/components/dropdown/dropdown-menu/dropdown-menu.component';
import { DropdownComponent } from '@app/components/dropdown/dropdown.component';
import { MenuItemComponent } from '@app/components/menu-item/menu-item.component';
import { ErrorInterceptor } from '@app/error.interceptor';
import { MessagesComponent } from '@app/layout/header/messages/messages.component';
import { NotificationsComponent } from '@app/layout/header/notifications/notifications.component';
import { UserComponent } from '@app/layout/header/user/user.component';
import { MainComponent } from '@app/layout/main/main.component';
import { BlankComponent } from '@app/pages/blank/blank.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { LoginComponent } from '@app/pages/login/login.component';
import { PermissionDeniedComponent } from '@app/pages/permission-denied/permission-denied.component';
import { SubMenuComponent } from '@app/pages/sub-menu/sub-menu.component';
import { RegisterComponent } from '@app/pages/register/register.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';


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
    HomeComponent,
    PermissionDeniedComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayscrollbarsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
