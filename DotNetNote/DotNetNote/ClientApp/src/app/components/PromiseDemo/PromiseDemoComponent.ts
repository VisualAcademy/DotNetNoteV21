import { Component } from '@angular/core';
import { PromiseDemoService } from './PromiseDemoService';

@Component({
    selector: 'service-demo',
    templateUrl: './PromiseDemoComponent.html'
})
export class PromiseDemoComponent {
    isBusy = false; 
    names: any[]; 
    constructor(private svc: PromiseDemoService) {
        this.getData(); 
    }

    getData() {
        //this.names = svc.getData(); 
        this.svc.getData().then(n => {
            this.isBusy = true; 
            this.names = n; 
            this.isBusy = false; 
        }); 
    }
}

