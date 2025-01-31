import { Component, inject } from '@angular/core';
import {
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user-list.service';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    imports: [ReactiveFormsModule],
})
export class UserAddComponent {
    private fb = inject(NonNullableFormBuilder);

    private userService = inject(UserService);

    userForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        role: ['Software Developer', Validators.required],
        organization: ['Facebook', Validators.required],
        status: ['Active', Validators.required],
        avatar: [
            'https://randomuser.me/api/portraits/men/86.jpg',
            Validators.required,
        ],
        portfolio: [1, Validators.required],
        createdOn: [new Date(), Validators.required],
    });

    userMutation = injectMutation(() => this.userService.addUser());

    onSubmit() {
        const user = this.userForm.value as User;
        this.userMutation.mutate(user);
    }
}
