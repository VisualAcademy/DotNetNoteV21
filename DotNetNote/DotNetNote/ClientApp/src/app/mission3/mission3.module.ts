import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mission3RoutingModule } from './mission3-routing.module';
import { Mission3Component } from './mission3.component';
import { Mission3DetailComponent } from './mission3-detail.component';

@NgModule({
  imports: [
    CommonModule,
    Mission3RoutingModule
  ],
  declarations: [Mission3Component, Mission3DetailComponent]
})
export class Mission3Module { }
