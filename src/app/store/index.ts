import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { userListReducer, UserListState } from './users/user-list.reducer';


export interface State {
    usersList:UserListState
}

export const reducers: ActionReducerMap<State> = {
    usersList:userListReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
