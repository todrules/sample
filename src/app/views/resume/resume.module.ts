import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../imports/imports.module';
import { ResumeView } from './resume';
import { ResumeCard } from './card/card';
import { ResumeSkills } from './skills/skills';
import { ResumeExperience } from './experience/experience';
import { ResumeProfile } from './profile/profile';



@NgModule({
  imports: [
    CommonModule,
    ImportsModule
  ],
  declarations: [
    ResumeView,
    ResumeCard,
    ResumeSkills,
    ResumeExperience,
    ResumeProfile
  ],
  providers: [
  
  ],
  entryComponents: [
  
  ],
  exports: [
    ResumeView,
    ResumeProfile,
    ResumeCard,
    ResumeSkills,
    ResumeExperience
  ]
})
export class ResumeModule { }
