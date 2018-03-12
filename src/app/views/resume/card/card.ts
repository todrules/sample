import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ThemeService } from '../../../../lib/styles/theme';
import { Router } from '@angular/router';


@Component({
  selector: 'resume-card',
  templateUrl: './card.pug',
  styleUrls: ['./card.scss']
})
export class ResumeCard implements AfterViewInit {
  
  @ViewChild('headerdiv') headerdiv;
  @ViewChild('card') card;
  
  @Input() public cardEffect: string;
  @Input() public header: string;
  @Input() public themeColor: string;
  
  constructor(
    private themeService: ThemeService,
    private router: Router) {
    
  }
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    
    
    this.themeService.activeTheme.subscribe((theme) => {
  
      const moreDark = this.themeService.shady(theme.light, -0.1, 'hex');
      
      setTimeout(() => {
        this.card.nativeElement.style.backgroundColor = this.themeService.shady(theme.light, 0.3);
        this.card.nativeElement.style.color = theme.dark;
        this.headerdiv.nativeElement.style.backgroundColor = this.themeService.contrastinator(theme.secondary, moreDark, theme.dark);
        this.headerdiv.nativeElement.style.color = theme.secondary;
        
      });
      
    });
  }
  
  public goTo = (url: string) => {
    this.router.navigate([url]);
  }
}
