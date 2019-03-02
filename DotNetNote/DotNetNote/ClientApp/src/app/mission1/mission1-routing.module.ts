import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission1Component } from './mission1.component';
import { Mission1DetailComponent } from './mission1-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: Mission1Component },
            { path: 'detail', component: Mission1DetailComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mission1RoutingModule { }
