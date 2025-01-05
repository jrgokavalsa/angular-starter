import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './@starter/components/users/user.component';

@Component({
    selector: 'app-root',
    imports: [UserComponent,RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'angular-starter';
}
