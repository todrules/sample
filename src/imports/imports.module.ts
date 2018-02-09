import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../lib/layout/layout.module';
import { WidgetsModule } from '../lib/widgets/widgets.module';
import { AmChartsModule } from '@amcharts/amcharts3-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WidgetsModule,
    LayoutModule,
    AmChartsModule
  ],
  declarations: [
  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WidgetsModule,
    LayoutModule,
    AmChartsModule
  ],
  entryComponents: [
  
  ]
})
export class ImportsModule {

}
