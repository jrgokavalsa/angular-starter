import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { User } from '../../store/users/user-list.reducer';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    #http = inject(HttpClient);

    getAllUsers(): Observable<Array<User>> {
        return this.#http
            .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
            .pipe(delay(2000));
    }

    getUserById(id: number): Observable<User> {
        return this.#http
            .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
            .pipe(delay(2000));
    }
}
