import { Component } from '@angular/core';

import { PostViewModel, DateViewModel } from './blog.model';

@Component({
    selector: 'blog-post-main-summary',
    templateUrl: './blog.post.mainsummary.html',
    styleUrls: ['./blog.post.mainsummary.css']
})
export class BlogPostMainSummaryComponent {
    posts : PostViewModel[] = [
        { postId: 1, "title": "Angular 5", "name": "앵귤러", date: {month: "Jan", day: 25}},
        { postId: 2, "title": "ASP.NET Core 2.0", "name": "닷넷코어", date: {month: "Jan", day: 26}}
    ];
}

// export class PostViewModel {
//     postId: number; 
//     title: string;
//     name: string;
//     date: DateViewModel; 
// }

// export class DateViewModel {
//     month: string;
//     day: number; 
// }
