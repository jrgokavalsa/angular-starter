import { booleanAttribute, Component, input } from '@angular/core';

@Component({
    selector: 'suspense',
    template: `
        @if (loading()) {
            <ng-container *ngTemplateOutlet="loading"/>
        } @else if (error()) {
            <ng-container *ngTemplateOutlet="error"/>
        } @else {
            <ng-content />
        }

        <ng-template #loading>
            <div
                class="flex min-h-[400px] flex-auto flex-col items-center justify-center p-4 md:p-5"
            >
                <div class="flex justify-center">
                    <div
                        class="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
                        role="status"
                        aria-label="loading"
                    >
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </ng-template>

        <ng-template #error>
            <div
                class="flex min-h-[400px] flex-auto flex-col items-center justify-center p-4 md:p-5"
            >
                <div
                    class="flex flex-row items-center gap-x-2 gap-y-2 text-red-500"
                >
                    <svg
                        class="size-6 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                    <div class="flex flex-col gap-x-2">
                        <h3 class="text-lg font-semibold text-gray-800">
                            Error
                        </h3>
                        <p class="text-sm text-gray-600">
                            {{ errorMessage() }}
                        </p>
                    </div>
                </div>
            </div>
        </ng-template>
    `,
    standalone: true,
})
export class SuspenseComponent {
    errorMessage = input('Something went wrong. Please try again later.');

    loading = input(true, { transform: booleanAttribute });
    error = input(false, { transform: booleanAttribute });
}
