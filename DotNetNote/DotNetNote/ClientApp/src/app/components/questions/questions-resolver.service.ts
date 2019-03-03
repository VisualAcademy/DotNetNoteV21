import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { IQuestion } from './model';
import { QuestionDataService } from './dataservice';

@Injectable()
export class QuestionsResolverService implements Resolve<IQuestion> {
    constructor(private ds: QuestionDataService, private router: Router) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IQuestion> {
        let id = route.params["id"];

        // 예외 처리
        if (isNaN(id)) {
            console.log(`문제 번호는 숫자값이어야 합니다. : ${id}`);
            this.router.navigate(['/question']);
            return Observable.of(null); 
        }
        
        return this.ds.getById(+id)
            .map(question => {
                if (question) {
                    return question;
                }
                console.log(`문제를 찾을 수 없습니다. : ${id}`);
                this.router.navigate(['/question']);
                return null; 
            }).catch(error => {
                console.log(`에러가 발생했습니다. : ${error}`);
                this.router.navigate(['/question']);
                return Observable.of(null); 
            }); 
    }
}
