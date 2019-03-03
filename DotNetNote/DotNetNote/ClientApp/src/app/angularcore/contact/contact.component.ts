import { Component } from "@angular/core";

// 메타데이터/데코레이터 
@Component({
    selector: 'contact-contact',
    templateUrl: "./contact.component.html"    
})
export class ContactComponent {
    public Title: string = "연락처.";
}
