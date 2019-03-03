import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions }
    from '@angular/http';

import { TwoDataService } from './TwoDataService';

@Component({
    selector: 'two',
    templateUrl: './TwoComponent.html'
})
export class TwoComponent {

    public note: string = ""; 

    twos: any[] = [];

    constructor(private http: Http
        , private ds: TwoDataService) {
        this.getTwos();
    }

    getTwos() {
        this.ds.getTwos().subscribe((twos: any[]) => {
            this.twos = twos; 
        });      
    }

    btnSave_Click(frmValue: any) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        this.http.post("/api/TwoService"
            , JSON.stringify(frmValue)
            , { headers: headers }
        ).subscribe(result => {
            this.twos.push(result.json());
        });
    }
}
