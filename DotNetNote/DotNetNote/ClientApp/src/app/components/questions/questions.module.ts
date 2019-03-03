import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionsRoutingModule } from './questions-routing.module';

import { QuestionListComponent } from './list.component';

import { AnPagingHelperComponent } from '../shared/AnPagingHelperComponent';

@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule, 
        QuestionsRoutingModule
    ],
    exports: [],
    declarations: [
        // QuestionListComponent
    ],
    providers: [
        AnPagingHelperComponent
    ],
})
export class QuestionsModule {

}
