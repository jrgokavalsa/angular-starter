import { createAction } from "@ngrx/store";
import { User } from "../user-list.reducer";

export const loadUsers = createAction("[User List Page] Load Users");

export const loadUsersSuccess = createAction("[User List Page] Load Users Success", (users: Array<User>) => ({ users }));

export const loadUsersFailure = createAction("[User List Page] Load Users Failure", (error: string) => ({ error }));