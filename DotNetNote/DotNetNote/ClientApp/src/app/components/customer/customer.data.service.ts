import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CustomerDataService {

    constructor(private http: Http) {
    }

    getCustomers() {
        const API_URI = "/api/customers";

        return this.http.get(API_URI)
            .map((res: Response) => {
                return res.json();
            });
    }
}
