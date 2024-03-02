import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({providedIn : 'root'})
export class LoginService {

    loginIntoServer() {
        return of(true);
    }
}