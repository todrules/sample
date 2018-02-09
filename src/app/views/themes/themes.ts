import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../lib/styles/theme';

@Component({
  selector: 'themes-view',
  templateUrl: './themes.pug',
  styleUrls: ['./themes.scss']
})
export class Themes implements OnInit {
  
  public myThemes;
  public themeDefaults;
  public themeNames;
  
  constructor(private themeService: ThemeService) {
  
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
    this.myThemes = this.themeService.myThemes;
    this.themeNames = this.themeService.themeNames;
    this.themeDefaults = this.themeService.defaultColors;
   // this.themeService.setActiveTheme(4);
  }
  
  public setActiveTheme = (index: number) => {
    this.themeService.setThemeByIndex(index);

  }
}
