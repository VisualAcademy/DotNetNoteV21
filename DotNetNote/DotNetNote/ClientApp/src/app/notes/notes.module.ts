import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 라우팅 모듈 임포트
import { NotesRoutingModule } from './notes-routing.module';
// 컴포넌트들 임포트
import { NotesComponent } from './notes.component';
// 서비스 임포트
import { NotesDataService } from './notes.data.service';

@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule, 
        NotesRoutingModule
    ],
    declarations: [
        NotesComponent
    ],
    providers: [
        NotesDataService
    ],
})
export class NotesModule {
}
