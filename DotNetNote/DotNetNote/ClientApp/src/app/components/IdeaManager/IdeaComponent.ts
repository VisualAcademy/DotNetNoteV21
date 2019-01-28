//[10] 컴포넌트
import { Component, OnInit } from '@angular/core';
//import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { IIdea } from './IIdea';
import { IdeaDataService } from './IdeaDataService';

@Component({
    selector: "idea",
    templateUrl: './IdeaComponent.html'
})
export class IdeaComponent implements OnInit {

    public note: string = ""; 

    public ideas: IIdea[] = []; 

    constructor(private ds: IdeaDataService) {
    }

    ngOnInit() {
        this.ds.getAll().subscribe(
            (models: IIdea[]) => { this.ideas = models; },
            (error: any) => { console.log(error); },
            () => { console.log("아이디어 관리자 리스트 출력 완료..."); }
        ); 
    }

    btnSave_Click(val: any) {

        this.ds.add(val as IIdea).subscribe(
            (model: IIdea) => {
                if (model) {
                    console.log("저장 완료... : " + JSON.stringify(model));
                    // 저장 후 리스트 페이지로 이동
                    // this.router.navigate(['/heroes']);
                    this.ideas.push(model);
                }
                else {
                    console.log("저장되지 않음...");
                }
            },  // 성공 콜백
            (err: any) => {
                console.log(`저장 에러 발생: ${err}`);
            },  // 에러 콜백
            () => {
                
            }   // 마무리 콜백
        );

    }

    //constructor(private http: Http) {
    //    this.http.get("/api/IdeaService").subscribe(result => {
    //        this.ideas = result.json();
    //    });   
    //}

    //btnSave_Click(val) {
    //    var headers = new Headers();
    //    headers.append('Content-Type', 'application/json');
    //    this.http
    //        .post("/api/IdeaService", JSON.stringify(val), { headers: headers })
    //        .subscribe(result => { this.ideas.push(result.json()); }); 
    //}
}
