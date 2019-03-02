import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// demos 관련 컴포넌트
import { DemosComponent } from './demos.component';
import { TemplateDrivenDemoComponent } from './templatedrivendemo/templatedrivendemo.component';
import { UserComponent } from './forms/user/user.component';
import { BlogPostComponent } from './blog/BlogPost';
import { PostModifyComponent } from './blog/PostModify';

// 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: '',
        data: {
            title: '데모 예제들'
        },
        children: [
            {
                path: '',
                component: DemosComponent,
                data: {
                    title: '데모 예제들'
                }
            }, 
            {
                path: 'demos',
                component: DemosComponent,
                data: {
                    title: '데모 예제들'
                }
            },
            {
                path: 'templatedrivendemo',
                component: TemplateDrivenDemoComponent,
                data: {
                    title: '템플릿 기반 폼 사용하기'
                }
            },
            {
                path: 'forms/user',
                component: UserComponent,
                data: {
                    title: '2단계 형태의 서브 폴더 설정'
                }
            },
            {
                path: 'blog/post',
                component: BlogPostComponent,
                data: {
                    title: 'Blog/Post 예제'
                }
            },
            {
                path: 'post/modify',
                component: PostModifyComponent,
                data: {
                    title: 'Blog/Modify 예제'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class DemosRoutingModule {

}
