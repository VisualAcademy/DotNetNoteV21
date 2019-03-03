import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersRoutingModule } from './characters-routing.module';

import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character.component';

@NgModule({
    imports: [
        CommonModule, RouterModule, CharactersRoutingModule
    ],
    exports: [

    ],
    declarations: [
        CharactersComponent,
        CharacterComponent
    ],
    providers: [],
})
export class CharactersModule { }
