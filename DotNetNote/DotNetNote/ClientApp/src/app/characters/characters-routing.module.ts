import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';

const routes: Routes = [
    {
        path: 'characters',
        component: CharactersComponent,
        data: {
            title: '캐릭터들'
        }
    },
    {
        path: 'character',
        component: CharacterComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class CharactersRoutingModule { }
