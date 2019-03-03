import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// SharedModule
import { SharedModule } from '../shared/shared.module';

import {
    HeroesRoutingModule,
    HeroesDataService,
    HeroesComponent,
    HeroesWriteComponent,
    HeroesDetailsComponent,
    HeroesGuardService,
    HeroesResolverService,
    HeroesDetailsResolverComponent,
    HeroesEditComponent,
    HeroesEditReactiveComponent,
    HeroesDeleteComponent,
    HeroesIndexComponent,
    HeroesGridComponent,
    HeroesPagingHelperComponent
} from './index';

@NgModule({
    // 모듈
    imports: [
        SharedModule, 
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HeroesRoutingModule
    ],
    // 컴포넌트
    declarations: [
        HeroesComponent,
        HeroesWriteComponent,
        HeroesDetailsComponent,
        HeroesDetailsResolverComponent,
        HeroesEditComponent,
        HeroesEditReactiveComponent,
        HeroesDeleteComponent,
        HeroesIndexComponent,
        HeroesGridComponent,
        HeroesPagingHelperComponent
    ],
    // 데이터 서비스, 가드 서비스
    providers: [
        HeroesDataService,
        HeroesGuardService,
        HeroesResolverService
    ],
})
export class HeroesModule {
}
