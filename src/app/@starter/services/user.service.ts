import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "../../store/users/user-list.reducer";
import { delay, map, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class UserService{

    #http = inject(HttpClient);

    getAllUsers(): Observable<Array<User>>{
        return this.#http.get<Array<User>>("https://jsonplaceholder.typicode.com/users").pipe(delay(2000));
    }
    
}