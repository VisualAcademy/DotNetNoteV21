import { Component, OnInit } from '@angular/core';

import { HeroesDataService } from './heroes.data.service';
import { IHero } from './model';

@Component({
    selector: 'heroes',
    template: `
        <h1>영웅 캐릭터 리스트</h1>
        <a [routerLink]="['/heroes/write']" class="btn btn-primary">글쓰기</a>
        <ul>
            <li *ngFor="let hero of models">
                <a [routerLink]="['/heroes/details', hero.id]">
                {{hero.id}} - {{hero.name}}
                </a>
            </li>
        </ul>
    `
})
export class HeroesComponent implements OnInit {
    models: IHero[] = []; 
    constructor(private ds: HeroesDataService) {
        
    }
    ngOnInit() {
        this.getAll(); 
    }
    getAll() {
        this.ds.getAll().subscribe(
            (models: IHero[]) => { this.models = models; },
            (error: any) => { console.log(error); },
            () => { console.log('getAll() 메서드 호출 완료...'); }
        ); 
    }
}
