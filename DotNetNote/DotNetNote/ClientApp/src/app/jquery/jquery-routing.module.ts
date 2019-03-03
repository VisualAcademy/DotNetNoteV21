import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JqueryComponent } from './jquery.component';
import { JqueryColorComponent } from './jquery-color.component';
import { JqueryAnimateComponent } from './jquery-animate.component';
import { JqueryPluginComponent } from './jquery-plugin.component';
import { JquerySlideToggleComponent } from './jquery.slidetoggle.component';

const routes: Routes = [
    {
        //path: 'admin',
        path: '',
        component: JqueryComponent,
        data: {
            title: '관리자 전용 페이지'
        },
        children: [
            { path: 'color', component: JqueryColorComponent },
            { path: 'animate', component: JqueryAnimateComponent },
            { path: 'plugin', component: JqueryPluginComponent },
            { path: 'slidetoggle', component: JquerySlideToggleComponent }
        ]
    }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JqueryRoutingModule { }
