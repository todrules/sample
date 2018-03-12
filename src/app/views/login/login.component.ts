import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { contrastinator, shady } from '../../../services/platform/utils/color-utils';
import { ThemeService } from '../../../lib/styles/theme';

@Component({
  selector: 'login-view',
  templateUrl: './login.template.pug',
  styleUrls: ['./login.styles.scss']
})
export class LoginComponent {
  
  @ViewChild('loginBg') loginBg;
  @ViewChild('loginBtn') loginBtn;
  @ViewChild('logintitle') logintitle;
  
  public model = {
    email: '',
    password: ''
  };
  
  public hints = [
    {name: 'username', msg: 'This may be your email', hasErr: true}
  ];
  
  constructor(private router: Router, private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
      const colorDark = themeService.shady(theme.primary, -0.03, 'rgba', 0.3);
      const colorLt = themeService.shady(theme.primary, 0.05, 'rgba', 0.3);
      const cont = themeService.contrastinator(theme.primary, theme.dark, theme.light);
      const lt = themeService.shady(cont, 0.2);
      setTimeout(() => {
        this.loginBg.nativeElement.style.backgroundColor = theme.primary;
        this.loginBg.nativeElement.style.backgroundImage = `linear-gradient(45deg, ${theme.primary} 0, ${colorLt} 80%)`;
        this.loginBtn.nativeElement.style.backgroundColor = theme.accent;
        this.loginBtn.nativeElement.style.color = themeService.contrastinator(theme.accent, theme.dark, theme.light);
        this.logintitle.nativeElement.style.color = lt;
      });
    
    });
  }
  
  public goTo = () => {
    this.router.navigate(['dashboard']);
  }
  
}
