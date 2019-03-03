import { Component } from '@angular/core';
import { CustomerDataService } from './customer.data.service';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    providers: [ CustomerDataService ]
})
export class CustomerComponent {

    customers: any = [];

    constructor(private ds: CustomerDataService) {
    }

    ngOnInit() {
        this.ds.getCustomers().subscribe((customers: any[]) => {
            this.customers = customers; 
        });
    }
}

