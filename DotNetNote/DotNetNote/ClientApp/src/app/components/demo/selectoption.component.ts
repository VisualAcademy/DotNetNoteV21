import { Component } from '@angular/core';

@Component({
    selector: "selectoption",
    templateUrl: './selectoption.component.html'
})
export class SelectOptionComponent {
    tech = "-";
    printSelect(sv: any) {
        this.tech = sv; 
    }
    web = '-';
    printWeb(sv: any) {
        this.web = sv; 
    }
}
