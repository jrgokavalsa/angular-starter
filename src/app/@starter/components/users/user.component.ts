import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserFacade } from './user.facade';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    standalone: true,
    imports: [AsyncPipe, RouterLink],
    providers: [UserFacade],
})
export class UserComponent implements OnDestroy {
    #userFacade = inject(UserFacade);
    usersState$ = this.#userFacade.usersState$;

    constructor() {
        this.#userFacade.loadUsers();
    }

    ngOnDestroy(): void {
        this.#userFacade.resetUsers();
    }
}
