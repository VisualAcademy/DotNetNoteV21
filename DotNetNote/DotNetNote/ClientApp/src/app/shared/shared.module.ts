/// <summary>
/// Shared Module은 하나 이상의 모듈에서 사용할만한 기능들을 모아 놓는 곳
/// </summary>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularnotePagingHelperComponent }
    from './angularnote-paging-helper/angularnote-paging-helper.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        AngularnotePagingHelperComponent
    ],
    declarations: [
        AngularnotePagingHelperComponent
    ]
})
export class SharedModule { }
