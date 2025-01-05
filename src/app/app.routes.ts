import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadComponent: () => import('./@starter/components/users/user.component').then(m => m.UserComponent)
    },
    {
        path: 'users/:id',
        loadComponent: () => import('./@starter/components/users/user-detail/user-detail.component').then(m => m.UserDetailComponent)
    }

];
