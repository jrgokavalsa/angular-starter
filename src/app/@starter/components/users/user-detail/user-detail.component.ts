import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { injectParams } from 'ngxtension/inject-params';
import { UserFacade } from '../user.facade';

@Component({
    selector: 'app-user-detail',
    template: `
        @let userById = userById$ | async;
        <h1>User Detail with Id: {{ userId() }}</h1>
        @if (userById?.loading) {
            <p>Loading...</p>
        } @else if (userById?.error) {
            <p>Error: {{ userById?.error }}</p>
        } @else {
            <pre>{{ userById?.user | json }}</pre>
        }
    `,
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
})
export class UserDetailComponent {
    userId = injectParams('id', {
        parse: Number,
    });

    #userFacade = inject(UserFacade);

    userById$ = this.#userFacade.userState$;

    private userDetailsByIdEffect = effect(() => {
        const id = this.userId();
        console.log(id);
        if (id) this.#userFacade.loadUserById(id);
    });
}
