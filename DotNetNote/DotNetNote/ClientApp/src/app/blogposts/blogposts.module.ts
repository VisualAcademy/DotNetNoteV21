import { NgModule } from '@angular/core';

// 내장 모듈 등록
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// 사용자 정의 모듈 등록
import { BlogPostsRoutingModule } from './blogposts-routing.module';

// 사용자 정의 컴포넌트 등록
import { BlogPostsComponent } from './blogposts.component';
import { BlogCategoryComponent } from './blog-category/blog-category.component';
import { BlogCommentComponent } from './blog-comment/blog-comment.component';
import { BlogArchieveComponent } from './blog-archieve/blog-archieve.component';
import { MainSummaryList } from './main-summary-list/main-summary-list';
import { TechListViewComponent } from './TechListViewComponent/TechListViewComponent';
import { SiteListViewComponent } from './SiteListViewComponent/SiteListViewComponent';
import { BlogPostMainSummaryComponent } from './blog.post.mainsummary/blog.post.mainsummary';

// 사용자 정의 서비스 등록
import { LoggerService } from './shared/logger.service';
import { BlogArchieveService } from './services/blog-archieve.service';
import { TechListDataService } from './services/TechListDataService';
import { SiteListDataService } from './services/SiteListDataService';

@NgModule({
    // 모듈
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule,
        BlogPostsRoutingModule
    ],
    // 컴포넌트
    declarations: [
        BlogPostsComponent, 
        BlogCategoryComponent, BlogCommentComponent,
        BlogArchieveComponent, MainSummaryList, TechListViewComponent,
        SiteListViewComponent, BlogPostMainSummaryComponent
    ],
    // 서비스(데이터, 가드)
    providers: [
        LoggerService, BlogArchieveService, 
        TechListDataService, SiteListDataService
    ]
})
export class BlogPostsModule {

}
