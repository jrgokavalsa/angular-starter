import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortButton } from './@starter/components/action/button/button';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, SortButton],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-starter';
}
