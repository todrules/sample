import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { ThemeService } from '../lib/styles/theme';
import { shady } from '../services/platform/utils/color-utils';

@Component({
  selector: 'ui-root',
  templateUrl: './app.template.pug',
  styleUrls: ['./app.styles.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ui';
  
  constructor(private themeService: ThemeService, private ref: ChangeDetectorRef) {
  
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.themeService.activeTheme.subscribe((theme) => {
           this.ref.detach();
            console.log('should detect');
        this.ref.reattach();
      });
    });
  }
}
