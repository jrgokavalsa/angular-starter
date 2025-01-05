import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
    QueryClient,
    queryOptions,
} from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    #http = inject(HttpClient);
    #queryClient = inject(QueryClient);

    getAllUsers = () => (
        queryOptions({
            queryKey: ['users'],
            queryFn: async () => {
                const users = await lastValueFrom(
                    this.#http.get<User[]>(
                        'https://jsonplaceholder.typicode.com/users'
                    )
                );
                return users;
            },
        })
    )
    
}
