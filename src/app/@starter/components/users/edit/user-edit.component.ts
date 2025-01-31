import {
    Component,
    computed,
    effect,
    inject,
    input,
    numberAttribute,
    OnInit,
} from '@angular/core';
import {
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    injectMutation,
    injectQuery,
    QueryClient,
} from '@tanstack/angular-query-experimental';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user-list.service';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    imports: [ReactiveFormsModule],
    standalone: true,
})
export class UserEditComponent implements OnInit {
    // This component is the actual user edit component.
    // It is lazy loaded when the user navigates to the user edit page.
    // This component will display the user edit form.

    // The user edit form will allow the user to edit the user details.
    // The user details will be fetched from the server using the user service.
    // The user details will be updated when the user submits the form.
    // The user details will be saved to the server using the user service.

    private fb = inject(NonNullableFormBuilder);
    private userService = inject(UserService);
    private queryClient = inject(QueryClient);

    protected userForm = this.fb.group({
        id: [0, Validators.required],
        name: ['', Validators.required],
        email: ['', Validators.required],
        role: ['', Validators.required],
        organization: ['', Validators.required],
        status: ['', Validators.required],
        avatar: ['', Validators.required],
        portfolio: [0, Validators.required],
        createdOn: [new Date(), Validators.required],
    });

    protected readonly userId = input.required({
        transform: numberAttribute,
    });

    protected userQuery = injectQuery(() => {
        return this.userService.getUserById(this.userId);
    });

    protected updateUserMutation = injectMutation(() =>
        this.userService.updateUser()
    );

    protected userData = computed(() => this.userQuery.data());

    ngOnInit(): void {
        this.userForm.disable();
    }

    private userDataEffect = effect(() => {
        const user = this.userData();
        if (user) {
            this.userForm.enable();
            this.userForm.patchValue(user);
        }
    });

    /**
     * Handles the submission of the user edit form.
     *
     * Upon submission, the current form values are extracted and passed to the
     * `addUser` mutation. If the mutation is successful, the form is reset and
     * the user is redirected to the user list page.
     */
    onSubmit() {
        const user = this.userForm.value as User;
        this.updateUserMutation.mutate(user);
    }
}
