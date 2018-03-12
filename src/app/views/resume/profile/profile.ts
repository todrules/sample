import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../lib/styles/theme';
import { Router } from '@angular/router';
import { shady } from '../../../../services/platform/utils/color-utils';


@Component({
  selector: 'resume-profile',
  templateUrl: './profile.pug',
  styleUrls: ['./profile.scss']
})
export class ResumeProfile implements AfterViewInit {
  
  @ViewChild('lastname') lastname;
  @ViewChild('firstname') firstname;
  @ViewChild('imgdiv') imgdiv;
  @ViewChild('firsttier') firsttier;
  @ViewChild('social') social;
  
  @ViewChild('phonelabel') phonelabel;
  @ViewChild('phonelink') phonelink;
  @ViewChild('emaillabel') emaillabel;
  @ViewChild('emaillink') emaillink;
  @ViewChild('linkedlabel') linkedlabel;
  @ViewChild('linkedlink') linkedlink;
  @ViewChild('profilediv') profilediv;
  @ViewChild('cardheader') cardheader;
  @ViewChild('contact') contact;
  @ViewChild('profile') profile;
  
  @Input() public url: string;
  @Input() public icon: string;
  @Input() public label: string;
  @Input() public bgColor: string;
  
  constructor(
    private themeService: ThemeService,
    private router: Router) {
    
  }
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    
    this.themeService.activeTheme.subscribe((theme) => {
      
      const textBgColor = this.themeService.contrastinator(theme[this.bgColor], theme.light, theme.dark);
      const ltRGB = this.themeService.shady(theme.light, 0.3, 'rgba', 0.8);
      const bgHex = this.themeService.shady(theme.light, 0.3, 'hex');
      const textLtBg = this.themeService.contrastinator(bgHex, theme[this.bgColor], theme.light);
      const shade1 = this.themeService.shady(theme.dark, 0.2);
      
      setTimeout(() => {
        this.cardheader.nativeElement.style.backgroundColor = theme.secondary;
        this.lastname.nativeElement.style.color = theme.secondary;
        this.lastname.nativeElement.style.fontWeight = 700;
        this.firstname.nativeElement.style.color = shade1;
        this.firstname.nativeElement.style.fontWeight = 500;
        this.imgdiv.nativeElement.style.border = `1px dashed ${textLtBg}`;
        this.firsttier.nativeElement.style.color = shade1;
        this.social.nativeElement.style.color = theme.secondary;
        this.phonelabel.nativeElement.style.color = shade1;
        this.emaillabel.nativeElement.style.color = shade1;
        this.linkedlabel.nativeElement.style.color = shade1;
        this.phonelink.nativeElement.style.color = textLtBg;
        this.emaillink.nativeElement.style.color = textLtBg;
        this.linkedlink.nativeElement.style.color = textLtBg;
        this.phonelink.nativeElement.style.textDecoration = 'none';
        this.emaillink.nativeElement.style.textDecoration = 'none';
        this.linkedlink.nativeElement.style.textDecoration = 'none';
        this.profilediv.nativeElement.style.backgroundColor = ltRGB;
        this.contact.nativeElement.style.color = this.themeService.shady(theme.dark, 0.3);
        this.profile.nativeElement.style.color = this.themeService.shady(theme.dark, 0.3);
        this.flashName();
      });
      
    });
  }
  
  public flashName = () => {
    
    const color = this.themeService.shady(this.themeService[this.bgColor], 0.2, 'rgba', 0.5);
    
    this.lastname.nativeElement.style.filter = `brightness(1.4) contrast(1.3) saturate(1.5)`;
    const lgth = (Math.random() * 100) + 10;
    setTimeout(() => {
      this.lastname.nativeElement.style.filter = 'brightness(1) contrast(1) saturate(1)';
      const quickRepeat = Math.random();
      if(quickRepeat < 0.65) {
        const quickdelay = (Math.random() * 250) + 50;
        setTimeout(() => {
          this.flashName();
        }, quickdelay);
      } else {
        const delay = (Math.random() * 20000) + 10000;
        setTimeout(() => {
          this.flashName();
        }, delay);
      }
      
    }, lgth);
  }
  
  public goTo = (url: string) => {
    this.router.navigate([url]);
  }
}
