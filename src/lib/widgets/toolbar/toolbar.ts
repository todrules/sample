import { Component, Input, ViewChild } from '@angular/core';
import { contrastinator, shady } from '../../../services/platform/utils/color-utils';
import { ThemeService } from '../../styles/theme';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.pug',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar {
  
  @Input() color: string;
  @ViewChild('header') header;
  @ViewChild('endsection') endsection;
  
  constructor(private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
      const colorDark = shady(theme.primary, -0.1);
      const colorLt = shady(theme.primary, 0.1);
      const darker = shady(theme.primary, -0.3);
      setTimeout(() => {
        this.header.nativeElement.style.backgroundColor = theme.primary;
        this.header.nativeElement.style.backgroundImage = `-webkit-linear-gradient(45deg, ${colorDark} 0, ${colorLt} 100%)`;
        this.header.nativeElement.style.backgroundImage = `linear-gradient(45deg, ${colorDark} 0, ${colorLt} 100%)`;
        this.header.nativeElement.style.color = contrastinator(theme.primary, theme.dark, theme.light);
        this.header.nativeElement.style.borderBottom = `1px solid ${darker}`;
        this.endsection.nativeElement.style.color = contrastinator(theme.primary, theme.dark, theme.light);
      });
    
    });
  }
}
