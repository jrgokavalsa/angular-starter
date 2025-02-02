import { SelectionModel } from '@angular/cdk/collections';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    injectMutation,
    injectQuery,
} from '@tanstack/angular-query-experimental';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user-list.service';
import { SortHeader } from '../../action/button/button';
import { UserBadgeComponent } from '../status-badge/badge.component';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    standalone: true,
    imports: [RouterLink, UserBadgeComponent, SortHeader],
})
export class UserListComponent {
    userService = inject(UserService);

    protected readonly _page = signal<number>(1);
    protected readonly _limit = signal<number>(5);
    protected selectionUsers = new SelectionModel<User>(
        true,
        [],
        true,
        (o1, o2) => o1.id === o2.id
    );
    userDeleteMutation = injectMutation(() => this.userService.deleteUser());

    /**
     * Queries the user service to retrieve the list of users for the specified page number and limit.
     * The page number and limit are retrieved from the component signals, and the component signals
     * are updated when the user navigates to a different page.
     */
    users = injectQuery(() => ({
        queryKey: ['users', this._page(), this._limit()],
        queryFn: () =>
            this.userService.getAllUsers(this._page(), this._limit()),
        retry: 0,
    }));

    /**
     * Decrements the current page number by 1 if the current page number is greater than 0.
     * This method is used to navigate to the previous page of users.
     */
    previousPage() {
        const currentPage = this._page();
        if (currentPage > 1) this._page.update((value) => value - 1);
    }

    /**
     * Increments the current page number by 1 if the current page number is less than 1.
     * This method is used to navigate to the next page of users.
     */
    nextPage() {
        this._page.update((value) => value + 1);
    }

    /**
     * Handles the change event for the limit selection.
     * @param event - The event object containing the selected value.
     */
    onLimitChange(event: any) {
        const selectedValue = event.target.value;
        if (selectedValue) this._limit.set(selectedValue);
    }

    onDelete() {
        this.selectionUsers.selected.forEach((user) => {
            this.userDeleteMutation.mutate(user.id);
        });
        this.selectionUsers.clear();
    }
    /**
     * Toggles the selection state of all rows.
     *
     * If all rows are currently selected, it clears the selection.
     * Otherwise, it selects all available rows.
     */

    toggleAllRows() {
        if (this.isAllRowsSelected()) {
            this.selectionUsers.clear();
            return;
        }
        this.selectionUsers.select(...this.users.data()!);
    }

    /**
     * Checks if all rows are selected.
     *
     * @returns {boolean} - Returns true if the number of selected rows
     * is equal to the total number of rows available, otherwise false.
     */
    isAllRowsSelected(): boolean {
        return (
            this.selectionUsers.selected.length === this.users.data()?.length
        );
    }
}
