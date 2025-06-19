import { provideHttpClient, withFetch } from '@angular/common/http';
import {
    ApplicationConfig,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
    provideTanStackQuery,
    QueryClient,
    withDevtools,
} from '@tanstack/angular-query-experimental';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withFetch()),
        provideTanStackQuery(new QueryClient(), withDevtools()),
    ],
};
