import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { contrastinator, shady } from '../../../services/platform/utils/color-utils';
import { ThemeService } from '../../../lib/styles/theme';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'home-view',
  templateUrl: './home.pug',
  styleUrls: ['./home.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HomePage implements OnDestroy {
  
  @ViewChild('contentdiv') contentdiv;
  @ViewChild('btnPrimary1') btnPrimary1;
  @ViewChild('btnPrimary2') btnPrimary2;
  @ViewChild('btnPrimary3') btnPrimary3;
  @ViewChild('submitBtn') submitBtn;
  @ViewChild('footerdiv') footerdiv;
  @ViewChild('mapdiv') mapdiv;
  
  public slideIndex = 0;
  private myInterval;
  
  public slides = [
    {bgimage: '/assets/img/myhome1.jpeg', title: 'Donec dui metus, faucibus ut mollis ac, euismod ut libero!', btntext: 'Order Now!', state: 'in'},
    {bgimage: '/assets/img/myhome2.jpeg', title: 'Morbi imperdiet tempor ex, in congue sapien blandit sit amet...', btntext: 'Get Your FREE Sample', state: 'in'},
    {bgimage: '/assets/img/myhome3.jpeg', title: 'Praesent non semper dolor, a ultricies ligula?', btntext: 'Become a Member', state: 'in'}
  ];
  
  constructor(private router: Router, private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
      const colorDark = shady(theme.light, -0.1);
      const moreDark = shady(theme.light, -0.2);
      const colorLt = shady(theme.primary, 0.1);
      const cont = contrastinator(theme.primary, theme.dark, theme.light);
      const lt = shady(cont, 0.2);
      setTimeout(() => {
        this.contentdiv.nativeElement.style.backgroundColor = colorDark;
        this.btnPrimary1.nativeElement.style.backgroundColor = theme.primary;
        this.btnPrimary2.nativeElement.style.backgroundColor = theme.primary;
        this.btnPrimary3.nativeElement.style.backgroundColor = theme.primary;
        this.btnPrimary1.nativeElement.style.color = cont;
        this.btnPrimary2.nativeElement.style.color = cont;
        this.btnPrimary3.nativeElement.style.color = cont;
        this.submitBtn.nativeElement.style.backgroundColor = theme.dark;
        this.submitBtn.nativeElement.style.color = theme.light;
        this.footerdiv.nativeElement.style.backgroundColor = theme.dark;
        this.footerdiv.nativeElement.style.color = theme.light;
        this.mapdiv.nativeElement.style.backgroundColor = moreDark;
        this.mapdiv.nativeElement.style.color = theme.dark;
      });
      
    });
    this.myInterval = setInterval(() => {
      if(this.slideIndex === 2) {
        this.slideIndex = 0;
        this.slides[3].state = 'out';
        this.slides[0].state = 'in';
      } else {
        this.slideIndex++;
        this.slides[this.slideIndex - 1].state = 'out';
        this.slides[this.slideIndex].state = 'in';
      }
    }, 5000);
  }
  
  public goTo = (url: string) => {
    this.router.navigate([url]);
  }
  
  ngOnDestroy() {
    clearInterval(this.myInterval);
  }
}
