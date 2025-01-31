import { Component, input } from '@angular/core';

@Component({
    selector: 'user-badge',
    templateUrl: './badge.component.html',
    standalone: true,
})
export class UserBadgeComponent {
    readonly userStatus = input.required<string>();
}
