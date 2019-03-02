import { Component } from '@angular/core';

@Component({
    selector: "user",
    templateUrl: './user.component.html',
    styles: [`
        span { color: tomato; }
    `]
})
export class UserComponent {
    public username: string = "";
    public password: string = "";

    btnLogin_Click(args) {
        console.log(args); // OK 
        console.log(JSON.stringify(args)); // JSON => POST 방식 사용

        console.log(args.username);
        console.log(args.password);
    }
}
