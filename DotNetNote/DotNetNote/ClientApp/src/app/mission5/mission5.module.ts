import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mission5RoutingModule } from './mission5-routing.module';
import { Mission5DetailComponent } from './mission5-detail.component';
import { Mission5Component } from './mission5.component';

@NgModule({
  imports: [
    CommonModule,
    Mission5RoutingModule
  ],
  declarations: [Mission5DetailComponent, Mission5Component]
})
export class Mission5Module { }
