import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserListPageActions from '../../../store/users/actions/user-list-page.action';
import { UserListState } from '../../../store/users/user-list.reducer';
import {
    selectUsers,
    selectUsersError,
    selectUsersLoading,
} from '../../../store/users/user-list.selector';

@Injectable()
export class UserFacade {
    #store = inject(Store<UserListState>);

    usersState$ = this.#store.select((state) => ({
        users: selectUsers(state),
        error: selectUsersError(state),
        loading: selectUsersLoading(state),
    }));

    loadUsers() {
        this.#store.dispatch(UserListPageActions.loadUsers());
    }

    resetUsers() {
        this.#store.dispatch(UserListPageActions.resetUsersState());
    }
}
