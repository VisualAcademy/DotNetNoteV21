import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mission1RoutingModule } from './mission1-routing.module';
import { Mission1Component } from './mission1.component';
import { Mission1DetailComponent } from './mission1-detail.component';

@NgModule({
  imports: [
    CommonModule,
    Mission1RoutingModule
  ],
  declarations: [Mission1Component, Mission1DetailComponent]
})
export class Mission1Module { }
