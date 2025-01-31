import { Component } from '@angular/core';

Component({
    selector: 'app-user-edit-page',
    template: `<router-outlet/>`,
    standalone: true,
});
export class UserEditPageComponent {
    // This component is a placeholder for the user edit page.
    // It only contains a router-outlet which will display the actual user edit component.
    // This is done to allow the user edit component to be lazy loaded.
    // The user edit component will be loaded when the user navigates to the user edit page.
}
