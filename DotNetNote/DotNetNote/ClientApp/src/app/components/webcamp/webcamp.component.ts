import { Component } from '@angular/core';

//[1] 심플 버전
//import { Http } from '@angular/http';

//[2] RxJs 버전
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

interface IWebCampSpeaker {
    id: number;
    name: string;
    title: string;
    photo: string;
    description: string;
}

@Component({
    selector: 'webcamp',
    templateUrl: './webcamp.component.html'
})
export class WebCampComponent {

    private API_URI: string =
        "http://www.dotnetnote.com/api/WebCampService";

    public title: string = "발표자 리스트";

    //public speakers: any[] = [
    //    { "id": 1, "name": "홍길동", "title": "MVP", photo: "" },
    //    { "id": 2, "name": "백두산", "title": "MVP", photo: "" },
    //    { "id": 3, "name": "임꺽정", "title": "MVP", photo: "" }
    //];
    public speakers: IWebCampSpeaker[];

    // 생성자에 Http 주입
    constructor(private _http: Http) {
        //[1] 심플 버전
        //_http.get(this.API_URI).subscribe(result => {
        //    this.speakers = result.json();
        //});

        //[2] RxJs 버전
        this.getSpeakers();
    }

    //[2] RxJs 버전 관련 필드, 메서드 
    errorMessage: string; 
    getSpeakers() {
        return this._http.get(this.API_URI)
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError)
            .subscribe(
            speakers => this.speakers = speakers,
            error => this.errorMessage = <any>error
            );
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
