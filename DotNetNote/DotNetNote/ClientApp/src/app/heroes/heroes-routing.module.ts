import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Heroes 관련 컴포넌트, 서비스, 리졸버 등
import { HeroesComponent } from './heroes.component';
import { HeroesWriteComponent } from './heroes.write.component';
import { HeroesDetailsComponent } from './heroes.details.component';
import { HeroesGuardService } from './guard.service';
import { HeroesResolverService } from './heroes-resolver.service';
import { HeroesDetailsResolverComponent } from './heroes.details.resolver.component';
import { HeroesEditComponent } from './heroes.edit.component';
import { HeroesEditReactiveComponent } from './heroes.edit.reactive.component';
import { HeroesDeleteComponent } from './heroes.delete.component';
import { HeroesIndexComponent } from './heroes.index.component';

// 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: 'heroes',
        //component: HeroesComponent,
        component: HeroesIndexComponent,
        data: {
            title: '영웅 캐릭터 리스트'
        }
    },
    {
        path: 'heroes/write',
        component: HeroesWriteComponent,
        data: {
            title: '영웅 캐릭터 입력'
        }
    },
    {
        path: 'heroes/details/:id',
        //component: HeroesDetailsComponent, // 라우팅 리졸버 사용 전
        component: HeroesDetailsResolverComponent, // 라우팅 리졸버 사용 후
        data: {
            title: '영웅 캐릭터 상세 보기'
        },
        canActivate: [HeroesGuardService], // 가드 서비스 설치
        resolve: { hero: HeroesResolverService } // 라우트 리졸버 서비스 설치
    },
    {
        path: 'heroes/edit/:id',
        //component: HeroesEditComponent,           // 템플릿 기반 폼 사용
        component: HeroesEditReactiveComponent,     // 리액티브 폼 사용
        data: {
            title: '영웅 캐릭터 수정'
        },
        canActivate: [HeroesGuardService], // 가드 서비스 설치
        // "hero" 이름으로 라우트 리졸버 정의 
        resolve: { hero: HeroesResolverService } // 라우트 리졸버 서비스 설치
    },
    {
        path: 'heroes/delete/:id',
        component: HeroesDeleteComponent,
        data: {
            title: '영웅 캐릭터 삭제'
        },
        canActivate: [HeroesGuardService]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class HeroesRoutingModule {

}
