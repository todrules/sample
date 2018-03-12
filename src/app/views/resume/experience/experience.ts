import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../lib/styles/theme';
import { Router } from '@angular/router';
import { Bullet, Experience } from '../resume';


@Component({
  selector: 'resume-exp',
  templateUrl: './experience.pug',
  styleUrls: ['./experience.scss']
})
export class ResumeExperience implements AfterViewInit {
  
  @Input() public jobs: Experience[];

  
  constructor(
    private themeService: ThemeService) {
    
  }
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    
    
    this.themeService.activeTheme.subscribe((theme) => {
      
      
      setTimeout(() => {

      
      });
      
    });
  }
}
