import { NgModule } from '@angular/core';

// 내장 모듈 등록
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 사용자 정의 모듈 등록
import { DemosRoutingModule } from './demos.routing.module';

// 사용자 정의 컴포넌트 등록
import { DemosComponent } from './demos.component';
import { TemplateDrivenDemoComponent } from './templatedrivendemo/templatedrivendemo.component';
import { UserComponent } from './forms/user/user.component';
import { BlogPostComponent } from './blog/BlogPost';
import { PostModifyComponent } from './blog/PostModify';

// @NgModule 데코레이터 
@NgModule({
    // 모듈
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
        DemosRoutingModule
    ],
    // 컴포넌트
    declarations: [
        DemosComponent,
        TemplateDrivenDemoComponent,
        UserComponent, BlogPostComponent, PostModifyComponent
    ],
    // 서비스(데이터, 가드)
    providers: [
        // Empty
    ]
})
export class DemosModule {

}
