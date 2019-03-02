import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    API_URL = "api/WebApiJwt";

    constructor(private http: Http) {

    }

    get username() {
        return localStorage.getItem("username");
    }

    get isAuthenticated() {
        return !!localStorage.getItem("token");
    }

    post() {
        this.http.post(this.API_URL, null).subscribe(res => {
            localStorage.setItem("token", res.json().token);
            localStorage.setItem("username", res.json().username);
        });
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    }
}
