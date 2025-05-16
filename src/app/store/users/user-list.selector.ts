import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserListState, UserState } from './user-list.reducer';

export const userListSelector =
    createFeatureSelector<UserListState>('usersList');

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

export const userSelector = createFeatureSelector<UserState>('userById');

export const selectUser = createSelector(userSelector, (state) => state.user);

export const selectUserLoading = createSelector(
    userSelector,
    (state) => state.loading
);

export const selectUserError = createSelector(
    userSelector,
    (state) => state.error
);
