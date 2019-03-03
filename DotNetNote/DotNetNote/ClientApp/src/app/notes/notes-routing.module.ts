import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent } from './notes.component';

const routes: Routes = [
    {
        path: 'notes',
        component: NotesComponent,
        data: {
            title: '노트 리스트'
        }
    },
    {
        path: 'notes/:id',
        component: NotesComponent,
        data: {
            title: '노트 상세보기'
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class NotesRoutingModule {

}
