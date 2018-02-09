import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContainer } from './app-container/app-container.component';
import { MainContainer } from './main-container/main-container';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  imports: [
    CommonModule,
    WidgetsModule
  ],
  declarations: [
    AppContainer,
    MainContainer
  ],
  exports: [
    CommonModule,
    AppContainer,
    MainContainer,
    WidgetsModule
  ],
  entryComponents: [
  
  ]
})
export class LayoutModule {

}
