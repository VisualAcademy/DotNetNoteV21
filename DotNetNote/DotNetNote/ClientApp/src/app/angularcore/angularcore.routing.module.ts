import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// demos 관련 컴포넌트
import { AngularCoreComponent } from './angularcore.component';

// 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AngularCoreComponent,
                data: {
                    title: 'AngularCore 프로젝트 데모 예제들'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularCoreRoutingModule {

}
