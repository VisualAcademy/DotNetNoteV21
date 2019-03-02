import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: '쇼핑몰'
    },
    children: [
        {
            path: '',
            component: SalesComponent,
            data: {
                title: '쇼핑몰'
            }
        }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
