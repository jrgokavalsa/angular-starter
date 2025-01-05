import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserListState } from "./user-list.reducer";



export const userListSelector = createFeatureSelector<UserListState>('usersList');

export const selectUsers = createSelector(
    userListSelector,
    (state) => state.users
);

export const selectUsersLoading = createSelector(
    userListSelector,
    (state) => state.loading
);

export const selectUsersError = createSelector(
    userListSelector,
    (state) => state.error
);

