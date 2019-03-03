import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: CopyrightComponent, 
            }
        ])
    ],
    exports: [
        CopyrightComponent
    ],
    declarations: [
        CopyrightComponent
    ],
    providers: [],
})
export class SharedModule { }
