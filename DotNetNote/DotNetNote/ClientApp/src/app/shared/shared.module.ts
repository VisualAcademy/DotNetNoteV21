/// <summary>
/// Shared Module�� �ϳ� �̻��� ��⿡�� ����Ҹ��� ��ɵ��� ��� ���� ��
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
