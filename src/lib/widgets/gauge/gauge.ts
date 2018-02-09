import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../styles/theme';
import { shady } from '../../../services/platform/utils/color-utils';


@Component({
  selector: 'ui-gauge',
  templateUrl: './gauge.pug',
  styleUrls: ['./gauge.scss']
})
export class Gauge implements AfterViewInit, OnInit {
  
  @Input('amount') amount: number;
  @Input('caption') caption: string;
  @ViewChild('maindiv') maindiv;
  @ViewChild('cspan') cspan;
  @ViewChild('bar') bar;
  @ViewChild('fill') fill;
  
  public capClass;
  public amt80 = true;
  
  constructor(private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
      const hintcol = shady(theme.dark, 0.3);
      setTimeout(() => {
        if(+this.amount >= 80) {
          this.amt80 = true;
          this.bar.nativeElement.style.borderColor = theme.success;
          this.fill.nativeElement.style.borderColor = theme.success;
          this.cspan.nativeElement.style.color = theme.success;
        } else {
          this.amt80 = false;
          this.bar.nativeElement.style.borderColor = theme.warn;
          this.fill.nativeElement.style.borderColor = theme.warn;
          this.cspan.nativeElement.style.color = theme.warn;
        }
        
      });
      
    });
   
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
  
  }
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    setTimeout(() => {
      this.capClass = `p${this.amount}`;
      
    });
  }
}
