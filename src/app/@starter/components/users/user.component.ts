import { Component, inject, OnDestroy } from "@angular/core";
import { UserListState } from "../../../store/users/user-list.reducer";
import { Store } from "@ngrx/store";
import { selectUsers, selectUsersError, selectUsersLoading } from "../../../store/users/user-list.selector";
import * as UserListPageActions from "../../../store/users/actions/user-list-page.action";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { RouterLink } from "@angular/router";


@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    standalone: true,
    imports:[AsyncPipe,JsonPipe,RouterLink]
    })
export class UserComponent implements OnDestroy{
   private store = inject(Store<UserListState>);

    usersState$ = this.store.select(state => ({
        users: selectUsers(state),
        error: selectUsersError(state),
        loading: selectUsersLoading(state)
    }));

    constructor() {
        this.store.dispatch(UserListPageActions.loadUsers());
    }

    ngOnDestroy(): void {
        this.store.dispatch(UserListPageActions.resetUsersState());
    }
}