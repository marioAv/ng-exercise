import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginService } from './core/services/login.service';
import { UsersService } from './core/services/users.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule,HttpClientModule],
  providers: [LoginService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
