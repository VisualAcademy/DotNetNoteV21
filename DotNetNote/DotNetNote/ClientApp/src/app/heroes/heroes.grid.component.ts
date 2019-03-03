import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IHero } from './model';

@Component({
    selector: 'heroes-grid',
    templateUrl: './heroes.grid.component.html'
})
export class HeroesGridComponent implements OnInit {
    @Input()
    models: IHero[] = [];

    constructor() {
    }

    ngOnInit() {
    }
}
