import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { User } from "../model/user";

@Injectable({providedIn: 'root'})
export class UserService {
 
    #http = inject(HttpClient);

    getUsers() {
        return lastValueFrom(this.#http.get<Array<User>>('https://jsonplaceholder.typicode.com/users'));
    }

}