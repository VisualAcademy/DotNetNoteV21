import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: "output-child",
    templateUrl: './OutputChild.html'
})
export class OutputChild {
    pages = [1, 2, 3];

    clickPage(page: number) {
        this.pageChanged.emit(page); 
    }

    @Output()
    pageChanged: EventEmitter<number> = new EventEmitter();
}
