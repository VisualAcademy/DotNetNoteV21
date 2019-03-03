import { Component } from '@angular/core';
import { ObservableDemoService } from './ObservableDemoService';

@Component({
    selector: 'service-demo',
    templateUrl: './ObservableDemoComponent.html'
})
export class ObservableDemoComponent {
    isBusy = true; 
    names: any[]; 
    constructor(private svc: ObservableDemoService) {
        this.getData(); 
    }

    getData() {
        this.svc.getData().subscribe(n => {
            this.isBusy = true; 
            this.names = n; 
            this.isBusy = false; 
        }); 
    }
}
