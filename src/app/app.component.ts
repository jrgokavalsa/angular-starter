import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './@starter/components/user-list/user-list.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,UserListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-starter';
}
