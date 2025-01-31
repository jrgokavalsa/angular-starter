import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import {
    mutationOptions,
    QueryClient,
    queryOptions,
} from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    #http = inject(HttpClient);
    #queryClient = inject(QueryClient);

    getAllUsers = (_page: number, _limit: number) =>
        lastValueFrom(
            this.#http.get<User[]>(
                `https://retoolapi.dev/luyjxc/users?_page=${_page}&_limit=${_limit}&_sort=id&_order=desc`
            )
        );

    getUserById = (id: Signal<number>) =>
        queryOptions({
            queryKey: ['user', id()],
            queryFn: () =>
                lastValueFrom(
                    this.#http.get<User>(
                        `https://retoolapi.dev/luyjxc/users/${id()}`
                    )
                ),
            enabled: !!id,
        });

    addUser() {
        return mutationOptions({
            mutationKey: ['addUser'],
            mutationFn: (user: User) =>
                lastValueFrom(
                    this.#http.post<User>(
                        `https://retoolapi.dev/luyjxc/users`,
                        user
                    )
                ),
            onSuccess: (data) => {
                this.#queryClient.invalidateQueries({
                    queryKey: ['users', data.id],
                });
            },
        });
    }

    updateUser() {
        return mutationOptions({
            mutationKey: ['updateUser'],
            mutationFn: (user: User) =>
                lastValueFrom(
                    this.#http.put(
                        `https://retoolapi.dev/luyjxc/users/${user.id}`,
                        user
                    )
                ),
            onSuccess: (data, user) => {
                this.#queryClient.invalidateQueries({
                    queryKey: ['user', user.id],
                });
            },
        });
    }

    deleteUser() {
        return mutationOptions({
            mutationKey: ['deleteUser'],
            mutationFn: (id: number) =>
                lastValueFrom(
                    this.#http.delete(
                        `https://retoolapi.dev/luyjxc/users/${id}`
                    )
                ),
            onSuccess: () => {
                this.#queryClient.invalidateQueries({ queryKey: ['users'] });
            },
        });
    }
}
