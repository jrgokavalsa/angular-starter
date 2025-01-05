import { Component, inject } from '@angular/core';
import { injectQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { UserService } from '../../service/user-list.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    standalone: true,
})
export class UserListComponent {
    userService = inject(UserService);
    queryClient = inject(QueryClient);

    query = injectQuery(() => ({
        queryKey: ['users'],
        queryFn: () => this.userService.getUsers(),
    }));

  
}
