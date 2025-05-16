import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../@starter/services/user.service';
import { UserListApiActions, UserListPageActions } from './actions';

@Injectable({ providedIn: 'root' })
export class UserListEffects {
    private actions$ = inject(Actions);
    private userService = inject(UserService);

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserListPageActions.loadUsers),
            switchMap(() =>
                this.userService.getAllUsers().pipe(
                    map((users) => UserListPageActions.loadUsersSuccess(users)),
                    catchError((error) =>
                        of(UserListPageActions.loadUsersFailure(error))
                    )
                )
            )
        );
    });

    loadUserById$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserListApiActions.loadUserById),
            switchMap(({ id }) =>
                this.userService.getUserById(id).pipe(
                    map((user) => UserListApiActions.loadUserByIdSuccess(user)),
                    catchError((error) =>
                        of(UserListApiActions.loadUserByIdFailure(error))
                    )
                )
            )
        );
    });
}
