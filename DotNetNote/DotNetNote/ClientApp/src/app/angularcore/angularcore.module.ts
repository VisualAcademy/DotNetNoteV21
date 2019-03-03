import { NgModule } from '@angular/core';

// 내장 모듈 등록
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 사용자 정의 모듈 등록
import { AngularCoreRoutingModule } from './angularcore.routing.module';

// 사용자 정의 컴포넌트 등록
import { AngularCoreComponent } from './angularcore.component';
import { WelcomeComponent } from './home/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product/productlist.component';

@NgModule({
    // 모듈
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
        AngularCoreRoutingModule
    ],
    // 컴포넌트
    declarations: [
        AngularCoreComponent, 
        WelcomeComponent, AboutComponent, ContactComponent, ProductListComponent
    ],
    // 서비스(데이터, 가드)
    providers: [
        // Empty
    ]
})
export class AngularCoreModule {
}
