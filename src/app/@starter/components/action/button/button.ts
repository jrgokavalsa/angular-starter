import { OverlayModule } from '@angular/cdk/overlay';
import {
    booleanAttribute,
    Component,
    input,
    output,
    signal,
} from '@angular/core';

export type SortDirection = 'asc' | 'desc';
export type positionDirection = 'left' | 'right';
export type SortHeaderArrowPosition = 'after' | 'before';

@Component({
    selector: '[sort-header]',
    exportAs: 'sortHeader',
    templateUrl: './button.html',
    standalone: true,
    imports: [OverlayModule],
})
export class SortHeader {
    isOpen = signal(false);

    /** input signal to enable sort and position of column */
    enableSort = input(true, { transform: booleanAttribute });
    enablePosition = input(true, { transform: booleanAttribute });

    /** output signal to emit sort and position changes */
    onSortChange = output<SortDirection>();
    onPositionChange = output<positionDirection>();

    /**
     * Handle sort change event.
     * @param event The sort direction that was triggered.
     */
    handleSort(event: SortDirection) {
        this.onSortChange.emit(event);
        this.closeMenu();
    }

    /**
     * Handle position change event.
     * @param event The position direction that was triggered.
     */
    handlePosition(event: positionDirection) {
        this.onPositionChange.emit(event);
        this.closeMenu();
    }

    toggleMenu() {
        this.isOpen.update((value) => !value);
    }

    closeMenu() {
        this.isOpen.set(false);
    }
}
