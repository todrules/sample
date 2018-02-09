import { ModuleWithProviders, NgModule, NgZone, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Platform, setupPlatform } from './platform/platform';
import { PlatformConfigToken, providePlatformConfigs } from './platform/platform-registry';
import { COLORS, INIT_THEME, ThemeService } from '../lib/styles/theme';


@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    Platform,
    ThemeService
  ]
})
export class ServicesModule {
  constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
    
    if (parentModule) {
      throw new Error('ServicesModule is already loaded. Import only in AppModule');
    }
    
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        {
          provide: INIT_THEME,
          useValue: COLORS
        },
        { provide: PlatformConfigToken, useFactory: providePlatformConfigs },
        // useFactory: ionic core providers
        { provide: Platform, useFactory: setupPlatform, deps: [DOCUMENT, PlatformConfigToken, NgZone] }
      ]
    };
  }
}
