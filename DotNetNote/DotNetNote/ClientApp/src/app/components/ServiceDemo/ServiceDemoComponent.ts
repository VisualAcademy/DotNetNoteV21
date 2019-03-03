import { Component } from '@angular/core';
import { ServiceDemoService } from './ServiceDemoService';

@Component({
    selector: 'service-demo',
    templateUrl: './ServiceDemoComponent.html'
})
export class ServiceDemoComponent {
    names: any[]; 
    constructor(private svc: ServiceDemoService) {
        this.names = svc.getData(); 
    }
}
