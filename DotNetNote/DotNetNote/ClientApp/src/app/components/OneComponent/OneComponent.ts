import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
    selector: 'one',
    templateUrl: './OneComponent.html'
})
export class OneComponent {

    public note: string = ""; 

    ones: any[] = [];

    constructor(private http: Http) {
        this.http.get("/api/OneService").subscribe(result => {
            this.ones = result.json();
        });
    }

    btnSave_Click(frmValue: any) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        this.http.post("/api/OneService"
            , JSON.stringify(frmValue)
            , { headers: headers }
        ).subscribe(result => {
            this.ones.push(result.json());
        });
    }
}
