import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
    selector: "maxim-detail",
    templateUrl: "./MaximDetailComponent.html"
})
export class MaximDetailComponent implements OnInit {

    id: number; 
    private API_URI: string = "/api/MaximService";
    maxim = {}; 
    constructor(private _http: Http, private route: ActivatedRoute, private router: Router) {
        console.log("ctor");
    }

    ngOnInit() {
        this.id = +this.route.snapshot.params["id"];
        console.log("init");

        //[1] 데이터 조회
        this._http.get(this.API_URI + "/" + this.id).subscribe(result => {
            this.maxim = result.json();
        });
    }
}
