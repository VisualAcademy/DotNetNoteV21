import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission5Component } from './mission5.component';
import { Mission5DetailComponent } from './mission5-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: Mission5Component
            },
            {
                path: 'detail',
                component: Mission5DetailComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mission5RoutingModule { }
