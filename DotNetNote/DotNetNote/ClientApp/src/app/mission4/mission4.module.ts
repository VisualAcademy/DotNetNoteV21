import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mission4RoutingModule } from './mission4-routing.module';
import { Mission4Component } from './mission4.component';
import { Mission4DetailComponent } from './mission4-detail.component';

@NgModule({
  imports: [
    CommonModule,
    Mission4RoutingModule
  ],
  declarations: [Mission4Component, Mission4DetailComponent]
})
export class Mission4Module { }
