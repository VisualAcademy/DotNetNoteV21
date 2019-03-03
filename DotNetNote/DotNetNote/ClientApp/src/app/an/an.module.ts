import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 헤더
import { AnHeaderComponent } from './header/an-header.component';

// 메인 최근 글 리스트
import { MainSummaryComponent } from './main/main-summary.component';

// BlogPost 예제
import { SiteListDataService } from './blog/SiteListDataService'
import { TechListDataService } from './blog/TechListDataService';
import { SiteListViewComponent } from './blog/SiteListViewComponent';
import { TechListViewComponent } from './blog/TechListViewComponent';
import { MainSummaryListComponent } from './blog/main-summary-list.component';
import { BlogPostMainSummaryComponent } from './blog/blog.post.mainsummary';

@NgModule({
    imports: [
        CommonModule, RouterModule
    ],
    exports: [
        AnHeaderComponent, MainSummaryComponent,
        SiteListViewComponent, TechListViewComponent, MainSummaryListComponent, BlogPostMainSummaryComponent
    ],
    declarations: [
        AnHeaderComponent, MainSummaryComponent, 
        SiteListViewComponent, TechListViewComponent, MainSummaryListComponent, BlogPostMainSummaryComponent
    ],
    providers: [
        SiteListDataService, TechListDataService
    ],
})
export class AnModule { }
