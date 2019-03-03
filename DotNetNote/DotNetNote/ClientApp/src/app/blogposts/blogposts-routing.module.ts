import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// blogposts 관련 컴포넌트 
import { BlogPostsComponent } from './blogposts.component';

// routes 라우팅 정보 상수 생성
const routes: Routes = [
    {
        path: '',
        data: {
            title: '블로그 포스트'
        },
        children: [
            {
                path: '',
                component: BlogPostsComponent,
                data: {
                    title: '블로그 포스트'
                }
            },
            {
                path: 'blogposts',
                component: BlogPostsComponent,
                data: {
                    title: '블로그 포스트'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class BlogPostsRoutingModule {
}
