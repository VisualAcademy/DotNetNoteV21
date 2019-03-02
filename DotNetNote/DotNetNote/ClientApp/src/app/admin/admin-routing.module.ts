import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        //path: 'admin',
        path: '',
        component: AdminComponent,
        data: {
            title: 'jQuery �׽�Ʈ ������'
        },
        children: [
            { path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
