import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointRoutingModule } from './point-routing.module';
import { PointComponent } from './point.component';
import { PointDataService } from './point-data.service';

@NgModule({
  imports: [
    CommonModule,
    PointRoutingModule
  ],
  declarations: [PointComponent],
  providers: [PointDataService]
})
export class PointModule { }
