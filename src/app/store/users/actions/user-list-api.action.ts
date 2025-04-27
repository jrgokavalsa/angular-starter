// Actions to load and edit user by id
// In this step, we will create actions to load and edit a user by id. We will also create a service to fetch a user by id.

import { createAction } from '@ngrx/store';

export const loadUserById = createAction(
    '[User Page] Load User By Id',
    (id: number) => ({ id })
);

export const loadUserByIdSuccess = createAction(
    '[User Page] Load User By Id Success',
    (user) => ({ user })
);

export const loadUserByIdFailure = createAction(
    '[User Page] Load User By Id Failure',
    (error) => ({ error })
);
