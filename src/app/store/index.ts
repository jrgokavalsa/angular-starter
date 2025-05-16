import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
    userByIdReducer,
    userListReducer,
    UserListState,
    UserState,
} from './users/user-list.reducer';

export interface State {
    usersList: UserListState;
    userById: UserState;
}

export const reducers: ActionReducerMap<State> = {
    usersList: userListReducer,
    userById: userByIdReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
