import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'user-badge',
    templateUrl: './badge.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserBadgeComponent {
    readonly userStatus = input.required<string>();
}
