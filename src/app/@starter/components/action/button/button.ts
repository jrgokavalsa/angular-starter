import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
    selector: 'SortButton',
    templateUrl: './button.html',
    standalone: true,
    imports: [OverlayModule],
})
export class SortButton {
    isOpen = false;
}
