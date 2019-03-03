import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointComponent } from "./point.component";

const routes: Routes = [
  {
    path: 'point',
    component: PointComponent, 
    data: {
      title: "포인트 현황"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointRoutingModule { }
