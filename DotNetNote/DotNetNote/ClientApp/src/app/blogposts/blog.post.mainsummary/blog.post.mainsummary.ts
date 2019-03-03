import { Component } from '@angular/core';

import { PostViewModel, DateViewModel } from '../models/blog.model';

@Component({
    selector: 'blog-post-main-summary',
    templateUrl: 'blog.post.mainsummary.html',
    styleUrls: [ './blog.post.mainsummary.css' ]
})
export class BlogPostMainSummaryComponent {
    posts: PostViewModel[] = [
        { postId: 1, "title": "Angular 5", "name": "박용준", date: { month: "Jan", day: 25 } },
        { postId: 2, "title": "ASP.NET Core 2.0", "name": "한상훈", date: { month: "Jan", day: 26 } }
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
