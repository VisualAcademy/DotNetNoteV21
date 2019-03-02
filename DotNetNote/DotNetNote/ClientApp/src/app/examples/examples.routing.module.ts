import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// examples 관련 컴포넌트
import { ExamplesComponent } from './examples.component';
import { SubUrlComponent } from './components/suburl.component';
import { StronglyTypedComponent } from './stonglytyped/stonglytyped.component';
import { CategoryComponent } from './category/category.component';
import { FileUploadComponent } from './fileupload/fileupload.component';
import { FileUploadTestComponent } from './fileupload/fileuploadtest.component';
import { FileUploadTestFinalComponent } from './fileupload/fileuploadtestfinal.component';

import { AuthComponent } from './auth/auth.component';

// 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: '',
        data: {
            title: '예제들'
        },
        children: [
            {
                path: '',
                component: ExamplesComponent,
                data: {
                    title: '예제들'
                }
            },
            {
                path: 'suburl',
                component: SubUrlComponent,
                data: {
                    title: '서브 경로'
                }
            },
            {
                path: 'stronglytyped',
                component: StronglyTypedComponent,
                data: {
                    title: '타입스크립트의 인터페이스를 사용한 강력한 형식으로 프로그래밍'
                }
            },
            {
                path: 'fileupload',
                component: FileUploadComponent,
                data: {
                    title: '앵귤러 파일 업로드 테스트'
                }
            },
            {
                path: 'fileuploadtest',
                component: FileUploadTestComponent,
                data: {
                    title: '앵귤러 파일 업로드 테스트'
                }
            },
            {
                path: 'fileuploadtestfinal',
                component: FileUploadTestFinalComponent,
                data: {
                    title: '앵귤러 파일 업로드 테스트 - Web API를 사용하여 실제로 업로드'
                }
            },
            {
                path: 'category',
                component: CategoryComponent,
                data: {
                    title: '카테고리 출력'
                }
            },
            {
                path: 'auth',
                component: AuthComponent,
                data: {
                    title: '인증 연습'
                }
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ExamplesRoutingModule {

}
