import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../lib/styles/theme';
import { contrastinator, shady } from '../../../services/platform/utils/color-utils';

@Component({
  selector: 'themes-view',
  templateUrl: './themes.pug',
  styleUrls: ['./themes.scss']
})
export class Themes implements OnInit, AfterViewInit {
  
  public myThemes;
  public themeDefaults;
  public themeNames;
  
  constructor(private themeService: ThemeService) {
  
  
    
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    this.themeNames = this.themeService.themeNames;
    this.themeDefaults = this.themeService.defaultColors;
  
    this.themeService.activeTheme.subscribe((theme) => {
    
      setTimeout(() => {
      
      });
    
    });
    this.themeService.allThemes.subscribe((themes) => {
    
      setTimeout(() => {
        this.myThemes = themes;
      });
    
    });
   // this.themeService.setActiveTheme(4);
  }
  
  public setActiveTheme = (name: string) => {
    this.themeService.setThemeByName(name);

  }
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  public viewInit = () => {
  //  this.myThemes = this.themeService.myThemes;
  
  }
}
