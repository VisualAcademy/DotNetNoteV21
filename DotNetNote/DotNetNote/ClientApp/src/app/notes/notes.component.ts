import { Component, OnInit } from '@angular/core';
import { NotesDataService } from './notes.data.service';

@Component({
    selector: 'notes',
    template: `
        <h1>나의 노트</h1>
        <pre>{{gitHubApi | json}}</pre>
    `
})
export class NotesComponent implements OnInit {
    gitHubApi: any = {}; 
    constructor(private ds: NotesDataService) { }
    ngOnInit() {
        this.getGitHubApi(); 
    }
    getGitHubApi() {
        this.ds.getGitHubApi().subscribe((gitHubApi) => {
            this.gitHubApi = gitHubApi; 
        });
    }
}
