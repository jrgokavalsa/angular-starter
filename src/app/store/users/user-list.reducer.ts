import { createReducer, on } from "@ngrx/store";
import * as UserListPageActions from "./actions/user-list-page.action";


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface UserListState {
    users: User[];
    loading: boolean;
    error: string|null;
}

export const initialUsersState: UserListState = {
    users: [],
    loading: false,
    error: null
};
export const userListReducer = createReducer(initialUsersState,
    on(UserListPageActions.loadUsers, (state) => ({
            ...state,
            loading: true,
            error: null
    })),
    on(UserListPageActions.loadUsersSuccess, (state, { users }) => ({
            ...state,
            users:users,
            loading: false,
            error: null
    })
    ),
    on(UserListPageActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))

)