import { Component, OnInit } from "@angular/core";
import { SignService } from "../sign.service";

@Component({
    selector: "sign-details",
    templateUrl: './details.component.html'
})
export class SignDetailsComponent implements OnInit {
    sign = {
        signId: 0,
        username: "",
        name: "",
        email: "",
        password: ""
    };

    constructor(private signService: SignService) {
    }

    ngOnInit(): void {
        this.signService.details().subscribe(res => {
            this.sign.signId = res.signId; 
            this.sign.username = res.username; 
            this.sign.name = res.name; 
            this.sign.email = res.email; 
        }); 
    }
}
