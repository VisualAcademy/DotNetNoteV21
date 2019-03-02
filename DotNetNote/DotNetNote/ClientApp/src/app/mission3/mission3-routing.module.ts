import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mission3Component } from './mission3.component';
import { Mission3DetailComponent } from './mission3-detail.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: Mission3Component 
            }, 
            {
                path: 'detail',
                component: Mission3DetailComponent
            }, 
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mission3RoutingModule { }
