import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mission2RoutingModule } from './mission2-routing.module';
import { Mission2DetailComponent } from './mission2-detail.component';
import { Mission2Component } from './mission2.component';

@NgModule({
  imports: [
    CommonModule,
    Mission2RoutingModule
  ],
  declarations: [Mission2DetailComponent, Mission2Component]
})
export class Mission2Module { }
