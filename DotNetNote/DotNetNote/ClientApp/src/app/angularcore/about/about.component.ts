import { Component } from "@angular/core";

// 메타데이터/데코레이터 
@Component({
    selector: 'about-about',
    templateUrl: "./about.component.html"    
})
export class AboutComponent {
    public Title: string = "정보.";
}
