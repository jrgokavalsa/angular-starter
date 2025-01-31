import { provideHttpClient, withFetch } from '@angular/common/http';
import {
    ApplicationConfig,
    provideExperimentalZonelessChangeDetection,
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
        provideExperimentalZonelessChangeDetection(),
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withFetch()),
        provideTanStackQuery(new QueryClient(), withDevtools()),
    ],
};
