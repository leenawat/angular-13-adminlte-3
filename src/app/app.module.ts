import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { MainFullComponent } from './main/main-full.component';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainFullComponent,
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
