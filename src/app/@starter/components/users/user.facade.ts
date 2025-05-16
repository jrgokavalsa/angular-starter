import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    UserListApiActions,
    UserListPageActions,
} from '../../../store/users/actions';
import { UserListState } from '../../../store/users/user-list.reducer';
import {
    selectUser,
    selectUserError,
    selectUserLoading,
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

    userState$ = this.#store.select((state) => ({
        user: selectUser(state),
        error: selectUserError(state),
        loading: selectUserLoading(state),
    }));

    loadUsers() {
        this.#store.dispatch(UserListPageActions.loadUsers());
    }

    resetUsers() {
        this.#store.dispatch(UserListPageActions.resetUsersState());
    }

    loadUserById(id: number) {
        this.#store.dispatch(UserListApiActions.loadUserById(id));
    }
}
