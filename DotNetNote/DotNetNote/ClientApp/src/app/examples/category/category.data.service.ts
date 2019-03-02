import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CategoryDataService {

    private API_URL = "/api/CategoryServices";

    constructor(private http: Http) {

    }

    getCategories() : any {
        return this.http.get(this.API_URL).map((res: Response) => {
            return res.json();
        });
    }
}
