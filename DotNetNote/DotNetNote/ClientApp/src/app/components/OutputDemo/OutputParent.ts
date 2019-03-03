import { Component } from '@angular/core';

@Component({
    selector: "output-parent",
    templateUrl: './OutputParent.html'
})
export class OutputParent {
    page: number; 
    showPage(page: number) {
        this.page = page; 
    }
}
