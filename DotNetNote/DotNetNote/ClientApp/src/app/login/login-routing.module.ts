import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: '로그인'
    },
    children: [
        {
            path: '',
            component: LoginComponent,
            data: {
                title: '로그인'
            }
        }
    ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
