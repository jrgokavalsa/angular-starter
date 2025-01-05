import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../@starter/services/user.service";
import { switchMap, map, catchError, of } from "rxjs";
import * as UserListPageActions from "./actions/user-list-page.action";

@Injectable(
    {providedIn: 'root'}
)
export class UserListEffects {

    private actions$ = inject(Actions);
    private userService = inject(UserService);

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserListPageActions.loadUsers),
            switchMap(() => this.userService.getAllUsers().pipe(
                map(users => UserListPageActions.loadUsersSuccess( users)),
                catchError(error => of(UserListPageActions.loadUsersFailure( error )))
            ))
        );
    });

  
}