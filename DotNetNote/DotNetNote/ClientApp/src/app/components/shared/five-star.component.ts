import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'five-star',
    templateUrl: './five-star.component.html'
})
export class FiveStarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
