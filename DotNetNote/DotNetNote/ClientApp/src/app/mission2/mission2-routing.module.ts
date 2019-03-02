import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission2Component } from "./mission2.component";
import { Mission2DetailComponent } from "./mission2-detail.component";

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: Mission2Component },
            { path: 'detail', component: Mission2DetailComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mission2RoutingModule { }
