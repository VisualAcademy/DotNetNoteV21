import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogRoutes } from './blog.routes'; 

import { BlogMainComponent } from './blogmain.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(BlogRoutes)
    ],
    declarations: [
        BlogMainComponent
    ],
    providers: [
    ]
})
export class BlogModule { }
