import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission4Component } from './mission4.component';
import { Mission4DetailComponent } from './mission4-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: Mission4Component
            },
            {
                path: 'detail',
                component: Mission4DetailComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mission4RoutingModule { }
