import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { contrastinator, hexToRgb, shady } from '../../../services/platform/utils/color-utils';
import { ThemeService } from '../../../lib/styles/theme';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface GaugeInterface {
  amount: number;
  caption: string;
}

export interface Experience {
  jobtitle: string;
  dates?: string;
  employer: string;
  bullets?: Bullet[];
}

export interface Bullet {
  text: string;
}

@Component({
  selector: 'resume-view',
  templateUrl: './resume.pug',
  styleUrls: ['./resume.scss'],
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
export class ResumeView {
  
  @ViewChild('imgscreen') imgscreen;
  @ViewChild('cardheader') cardheader;
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
  @ViewChild('header1') header1;
  @ViewChild('header2') header2;
  @ViewChild('header3') header3;
  @ViewChild('header4') header4;
  @ViewChild('card1') card1;
  @ViewChild('card2') card2;
  @ViewChild('card3') card3;
  @ViewChild('card4') card4;
  @ViewChild('contact') contact;
  @ViewChild('profile') profile;
  
  public skills: GaugeInterface[] = [
    {amount: 96, caption: 'Systems Analysis'},
    {amount: 92, caption: 'Angular / NodeJS'},
    {amount: 92, caption: 'CSS / SCSS'},
    {amount: 90, caption: 'Web Development'},
    {amount: 89, caption: 'Hybrid Mobile'},
    {amount: 88, caption: 'Enterprise Architecture'},
    {amount: 87, caption: 'Web Services / REST'},
    {amount: 85, caption: 'Networking'},
    {amount: 84, caption: 'UX/UI Design'},
    {amount: 84, caption: 'GIT / Github / Bitbucket'},
    {amount: 78, caption: 'Continuous Integration (CI)'},
    {amount: 77, caption: 'Cloud Services'}
  ];
  
  public jobs: Experience[] = [
    {
      jobtitle: 'Sr. Software Engineer',
      dates: 'Nov 2017 - Jan 2018',
      employer: 'Surveillus Networks, LLC',
      bullets: [
        {text: 'Responsible for creating the solutions architecture of a new monitoring and data analysis security application.'},
        {text: 'Designed, developed, tested, and documented every process flow that was implemented.'},
        {text: 'Utilized latest Angular versions and associated libraries, such as Angular Material, TypeScript, NodeJS, Angular Flex Layout, and Redux.'},
        {text: 'Completely rewrote the prototype application, resulting in a 75% reduction in code.'}
      ]
    },
    {
      jobtitle: 'UX / UI Developer',
      dates: 'Mar 2017 - May 2017',
      employer: 'Desert Oasis Healthcare',
      bullets: [
        {text: 'Refactored massive Angular2 codebase into a more modularized system architecture.'},
        {text: 'Updated internet and intranet to utilize Angular version 4.x and migrated from Bootstrap UI to Angular Material as well as moved from SystemJS to Webpack.'},
        {text: 'Helped implement continuous integration (using Visual Studio Team Services) and created a package library for all developers to use.'}
      ]
    },
    {
      jobtitle: 'Owner / CEO',
      dates: 'Nov 2015 - Mar 2017',
      employer: 'Groove, LLC',
      bullets: [
        {text: 'Delivered multiple hybrid mobile apps, increasing net income by 73%.'},
        {text: 'Improved productivity by automating the creation of REST services to generate more than 100,000 lines of code in less than 5 seconds.'},
        {text: 'Created an SEO portal using AngularJS and Node.js to display real-time data that was retrieved through Google APIs and Google Analytics.'},
        {text: 'Created and managed PPC campaigns in Google AdWords, resulting in a 20% higher Click-Through Rate (CTR) and 15% higher goal resolutions.'}
      ]
    },
    {
      jobtitle: 'Principal Systems Analyst',
      dates: 'Jun 2008 - Nov 2015',
      employer: 'T-Mobile USA, Inc.',
      bullets: [
        {text: 'Introduced a large-scale, highly-distributed, low-latency UI in all T-Mobile retail stores and call centers which was used by 60,000+ end-users who supported more than 70 million customers, increasing customer satisfaction and decreasing Call Resolution Time (CRT) by 15+ seconds which saved T-Mobile more than $30 million dollars.'},
        {text: 'Acted as a key project member on many multi-million dollar projects consisting of teams of 100+ members and impacting a complex, enterprise-level system.'},
        {text: 'Mentored, trained, and led a team of analysts.'},
        {text: 'Improved processes, increasing on-time and on-budget projects.'},
        {text: 'Designed, developed, and presented a prototype of a next-gen UI to cross-functional teams at T-Mobile, as well as to VIPs, like the CIO, Vice Presidents, and outside vendors.'},
        {text: 'Delivered detailed technical design documents, which included process diagrams, use cases, and wireframes, decreasing defects by more than 12%.'}
      ]
    }
  ];
  
  constructor(private router: Router, private themeService: ThemeService) {
    themeService.activeTheme.subscribe((theme) => {
      const colorDark = shady(theme.secondary, -0.2);
      const moreDark = shady(theme.light, -0.1, 'hex');
      const colorLt = shady(theme.dark, 0.3);
      const cont = contrastinator(theme.primary, theme.dark, theme.light);
      const lt = shady(cont, 0.2);
      const shade1 = shady(theme.dark, 0.2);
      const shade2 = shady(theme.dark, 0.4);
      const shade3 = shady(theme.secondary, 0.2);
      const ltRGB = shady(theme.light, 0.3, 'rgba', 0.8);
      setTimeout(() => {
        this.cardheader.nativeElement.style.backgroundColor = theme.secondary;
        this.lastname.nativeElement.style.color = theme.secondary;
        this.lastname.nativeElement.style.fontWeight = 700;
        this.firstname.nativeElement.style.color = colorLt;
        this.firstname.nativeElement.style.fontWeight = 500;
        this.imgdiv.nativeElement.style.border = `1px dashed ${colorDark}`;
        this.firsttier.nativeElement.style.color = shade1;
        this.social.nativeElement.style.color = theme.secondary;
        this.phonelabel.nativeElement.style.color = shade1;
        this.emaillabel.nativeElement.style.color = shade1;
        this.linkedlabel.nativeElement.style.color = shade1;
        this.phonelink.nativeElement.style.color = shade3;
        this.emaillink.nativeElement.style.color = shade3;
        this.linkedlink.nativeElement.style.color = shade3;
        this.phonelink.nativeElement.style.textDecoration = 'none';
        this.emaillink.nativeElement.style.textDecoration = 'none';
        this.linkedlink.nativeElement.style.textDecoration = 'none';
        this.profilediv.nativeElement.style.backgroundColor = ltRGB;
        this.header1.nativeElement.style.backgroundColor = contrastinator(theme.secondary, shady(theme.light, -0.1, 'hex'), theme.dark);
        this.header1.nativeElement.style.color = theme.secondary;
        this.header2.nativeElement.style.backgroundColor = contrastinator(theme.secondary, shady(theme.light, -0.1, 'hex'), theme.dark);
        this.header2.nativeElement.style.color = theme.secondary;
        this.header3.nativeElement.style.backgroundColor = contrastinator(theme.secondary, shady(theme.light, -0.1, 'hex'), theme.dark);
        this.header3.nativeElement.style.color = theme.secondary;
        this.header4.nativeElement.style.backgroundColor = contrastinator(theme.secondary, shady(theme.light, -0.1, 'hex'), theme.dark);
        this.header4.nativeElement.style.color = theme.secondary;
        this.card1.nativeElement.style.backgroundColor = shady(theme.light, 0.4);
        this.card1.nativeElement.style.color = theme.dark;
        this.card2.nativeElement.style.backgroundColor = shady(theme.light, 0.4);
        this.card2.nativeElement.style.color = theme.dark;
        this.card3.nativeElement.style.backgroundColor = shady(theme.light, 0.4);
        this.card3.nativeElement.style.color = theme.dark;
        this.card4.nativeElement.style.backgroundColor = shady(theme.light, 0.4);
        this.card4.nativeElement.style.color = theme.dark;
        this.contact.nativeElement.style.color = shady(theme.dark, 0.3);
        this.profile.nativeElement.style.color = shady(theme.dark, 0.3);
        this.imgscreen.nativeElement.style.backgroundColor = shady(theme.light, 0.4, 'rgba', 0.8);
      });
      
    });
    
  }
  
  public goTo = (url: string) => {
    this.router.navigate([url]);
  }

}
