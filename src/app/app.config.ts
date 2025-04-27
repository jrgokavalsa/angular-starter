import {
    ApplicationConfig,
    isDevMode,
    provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { metaReducers, reducers } from './store';
import { UserListEffects } from './store/users/user-list.effect';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(),
        provideRouter(routes),
        provideStore(reducers, { metaReducers }),
        provideEffects(UserListEffects),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
};
