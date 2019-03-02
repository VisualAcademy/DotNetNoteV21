import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GoodsRoutingModule } from './goods.routing.module';
import { GoodsComponent } from './components/goods.component';

@NgModule({
    // 모듈
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule,
        GoodsRoutingModule
    ],
    // 컴포넌트
    declarations: [
        GoodsComponent
    ],
    // 데이터 서비스, 가드 서비스
    providers: [
    ]
})
export class GoodsModule {

}
