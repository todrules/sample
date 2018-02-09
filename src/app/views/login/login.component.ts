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
      const colorDark = shady(theme.primary, -0.1);
      const colorLt = shady(theme.primary, 0.1);
      const cont = contrastinator(theme.primary, theme.dark, theme.light);
      const lt = shady(cont, 0.2);
      setTimeout(() => {
        this.loginBg.nativeElement.style.backgroundColor = theme.primary;
        this.loginBg.nativeElement.style.backgroundImage = `-webkit-linear-gradient(45deg, ${colorDark} 0, ${colorLt} 100%)`;
        this.loginBg.nativeElement.style.backgroundImage = `linear-gradient(45deg, ${colorDark} 0, ${colorLt} 100%)`;
        this.loginBtn.nativeElement.style.backgroundColor = theme.secondary;
        this.loginBtn.nativeElement.style.color = contrastinator(theme.secondary, theme.dark, theme.light);
        this.logintitle.nativeElement.style.color = lt;
      });
    
    });
  }
  
  public goTo = () => {
    this.router.navigate(['dashboard']);
  }
  
}
