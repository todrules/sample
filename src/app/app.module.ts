import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ImportsModule } from '../imports/imports.module';
import { Dashboard } from './views/dashboard/dashboard';
import { ServicesModule } from '../services/services.module';
import { Themes } from './views/themes/themes';
import { HomePage } from './views/home/home';
import { Slide3 } from './views/home/slides/slide3/slide3';
import { ResumeModule } from './views/resume/resume.module';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ImportsModule,
    ServicesModule.forRoot(),
    ResumeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    Dashboard,
    Themes,
    HomePage,
    Slide3
  ],
  providers: [
  
  ],
  entryComponents: [
  
  ],
  exports: [
    ImportsModule,
    AppComponent,
    LoginComponent,
    Dashboard,
    Themes,
    ServicesModule,
    HomePage,
    ResumeModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
