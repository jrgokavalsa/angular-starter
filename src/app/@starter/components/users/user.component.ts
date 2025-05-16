import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserFacade } from './user.facade';
import{injectParams} from 'ngxtension/inject-params';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    standalone: true,
    imports: [AsyncPipe, RouterLink,RouterOutlet],
    providers: [UserFacade],
})
export class UserComponent implements OnDestroy {
    #userFacade = inject(UserFacade);
    usersState$ = this.#userFacade.usersState$;
    userId = injectParams('id');

    constructor() {
        this.#userFacade.loadUsers();
    }

    ngOnDestroy(): void {
        this.#userFacade.resetUsers();
    }
}
