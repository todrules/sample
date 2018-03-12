import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../lib/styles/theme';
import { Router } from '@angular/router';
import { Bullet, Experience } from '../resume';


@Component({
  selector: 'resume-skills',
  templateUrl: './skills.pug',
  styleUrls: ['./skills.scss']
})
export class ResumeSkills implements AfterViewInit {
  
  @Input() public skills: Experience[];
  
  
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
