import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListComponent } from './list.component';

//import { QuestionsResolverService } from './questions-resolver.service';

const routes: Routes = [
    {
        path: 'question',
        component: QuestionListComponent,
        data: {
            title: '문제풀이'
        }
    }
];

@NgModule({
    imports: [
       RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class QuestionsRoutingModule { }
