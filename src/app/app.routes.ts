import { Routes } from '@angular/router';
import { ProductService } from './@starter/service/product.service';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
    },
    {
        path: 'users',
        loadComponent: () =>
            import('./@starter/components/users/list/user-list.component').then(
                (c) => c.UserListComponent
            ),
    },
    {
        path: 'users/new',
        loadComponent: () =>
            import('./@starter/components/users/add/user-add.component').then(
                (c) => c.UserAddComponent
            ),
    },
    {
        path: 'users/:userId',
        loadComponent: () =>
            import('./@starter/components/users/edit/user-edit.component').then(
                (c) => c.UserEditComponent
            ),
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./@starter/components/products/list/product-list').then(
                (c) => c.ProductListComponent
            ),
        providers: [ProductService],
    },
];
