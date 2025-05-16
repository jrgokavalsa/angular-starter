import { createReducer, on } from '@ngrx/store';
import { UserListApiActions, UserListPageActions } from './actions';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface UserListState {
    users: User[];
    loading: boolean;
    error: string | null;
}

export interface UserState {
    user: User;
    loading: boolean;
    error: string | null;
}

export const initialUsersState: UserListState = {
    users: [],
    loading: false,
    error: null,
};
export const userListReducer = createReducer(
    initialUsersState,
    on(UserListPageActions.loadUsers, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(UserListPageActions.loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: users,
        loading: false,
        error: null,
    })),
    on(UserListPageActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(UserListPageActions.resetUsersState, (state) => ({
        ...state,
        users: [],
        loading: false,
        error: null,
    }))
);

export const initialUserState: UserState = {
    user: {} as User,
    loading: false,
    error: null,
};
export const userByIdReducer = createReducer(
    initialUserState,
    on(UserListApiActions.loadUserById, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(UserListApiActions.loadUserByIdSuccess, (state, { user }) => ({
        ...state,
        user: user,
        loading: false,
        error: null,
    })),
    on(UserListApiActions.loadUserByIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
