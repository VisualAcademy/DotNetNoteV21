import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { IHero } from './model';
import { HeroesDataService } from './heroes.data.service';

@Injectable()
export class HeroesResolverService implements Resolve<IHero> {
    constructor(private ds: HeroesDataService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IHero> {
        let id = route.params["id"];

        // 예외 처리
        if (isNaN(id)) {
            console.log(`영웅 정보 id는 숫자값이어야 합니다. : ${id}`);
            this.router.navigate(['/heroes']); // 리스트 페이지로 리디렉션
            return Observable.of(null);  
        }

        return this.ds.getById(id)
            .map((hero) => {
                if (hero) {
                    return hero; 
                }
                console.log(`영웅 정보를 찾을 수 없습니다. : ${id}`);
                this.router.navigate(['/heroes']); // 리스트 페이지로 리디렉션
                return null; 
            })
            .catch((err) => {
                console.log(`에러가 발생했습니다. : ${err}`);
                this.router.navigate(['/heroes']); // 리스트 페이지로 리디렉션
                return Observable.of(null); 
            }); 
    }
}
