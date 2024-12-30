import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule
  ]
})
export class SectionsModule { }
