import { Component, OnInit } from '@angular/core';

import { CoursesDataService } from './courses.dataservice';

@Component({
    selector: "courses",
    templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit {
    gitHubApi: any = {}; 
    constructor(private ds: CoursesDataService) { }
    ngOnInit() {
        this.getGitHubApi(); 
    }
    getGitHubApi() {
        this.ds.getGitHubApi().subscribe((gitHubApi) => { this.gitHubApi = gitHubApi; }); 
    }
}
