import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';


//[!] Observable 방식
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
    selector: 'main-summary',
    templateUrl: './main-summary.component.html'
})
export class MainSummaryComponent {

    NOTE_SERVICE = "http://www.dotnetnote.com/api/NoteService";

    COMMENT_SERVICE = "http://www.dotnetnote.com/api/NoteCommentService/";


    public notes: INote[];      // 최글 글 리스트
    public comments = [];   // 최근 댓글 리스트 

    constructor(private _http: Http) {
        // 게시판 리스트 5개 
        //_http.get(this.NOTE_SERVICE).subscribe(result => {
        //    this.notes = result.json();
        //});

        this.getNotes().subscribe((notes: INote[]) => {
            this.notes = notes;
        }, (err: any) => console.log(err), () => console.log('정상'));

        // 댓글 리스트 5개
        _http.get(this.COMMENT_SERVICE).subscribe(result => {
            this.comments = result.json();
        });
    }

    getNotes(): Observable<INote[]> {
        return this._http.get(this.NOTE_SERVICE).map((res: Response) => {
            return res.json();
        });
    }
}


interface INote {
    id: string;
    name: string;
    email: string;
    title: string;
    postDate: string;
    postIp: string;
    content: string;
    password: string;
    readCount: number;
    encoding: string;
    homepage: string;
    modifyDate: string;
    modifyIp: string;
    fileName: string;
    fileSize: number;
    downCount: number;



    category: string;
}
