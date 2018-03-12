import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { contrastinator, shady } from '../../../../../services/platform/utils/color-utils';
import { ThemeService } from '../../../../../lib/styles/theme';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'ui-slide3',
  templateUrl: './slide3.pug',
  styleUrls: ['./slide3.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('250ms ease-out')
      ]),
      transition('* => void', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class Slide3 implements OnDestroy, AfterViewInit {
  
  @ViewChild('coloredDiv') coloredDiv;
  @ViewChild('activeBtn') activeBtn;
  @ViewChild('slidetitle') slidetitle;
  @ViewChild('cont') cont;

  @Input('bgimage') bgimage;
  @Input('title') title;
  @Input('btntext') btntext;
  @Input('state') state;
  
  constructor(private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
    
      const colorLt = themeService.shady(theme.accent, 0.05, 'rgba', 0.3);
      const colorDk = themeService.shady(theme.accent, -0.05, 'rgba', 0.15);
      const cont = themeService.contrastinator(theme.primary, theme.dark, theme.light);

      setTimeout(() => {
        this.coloredDiv.nativeElement.style.backgroundColor = 'rgba(0,0,0,0.3)';
        this.activeBtn.nativeElement.style.backgroundColor = theme.accent;
        this.activeBtn.nativeElement.style.backgroundImage = `linear-gradient(45deg, ${colorDk} 0, ${colorLt} 100%)`;
        this.activeBtn.nativeElement.style.color = themeService.contrastinator(theme.accent, theme.dark, theme.light);
        this.slidetitle.nativeElement.style.color = theme.light;
      });
    
    });
    
    
  }
  
  ngOnDestroy() {
  
    
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.cont.nativeElement.style.backgroundImage = `url('${this.bgimage}')`;
    });
  }
}
